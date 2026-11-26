# frozen_string_literal: true

module ModraUpExamples
  module DrawLine
    class LineTool
      def initialize
        @start = API::InputPoint.new
        @cursor = API::InputPoint.new
      end

      def activate
        reset
      end

      def deactivate(view)
        API.set_status_text('')
        view.invalidate
      end

      def resume(view)
        show_prompt
        view.invalidate
      end

      def onMouseMove(_flags, x, y, view)
        pick(x, y, view)
        view.tooltip = @cursor.tooltip
        view.invalidate
      end

      def onLButtonDown(_flags, x, y, view)
        pick(x, y, view)
        return unless @cursor.valid?

        if !@start.valid?
          @start.copy!(@cursor)
          show_prompt
        elsif @start.position != @cursor.position
          add_edge(@start.position, @cursor.position)
          reset
        end
        view.invalidate
      end

      def draw(view)
        if @start.valid? && @cursor.valid?
          view.draw(GL_LINES, @start.position, @cursor.position)
        end
        @cursor.draw(view) if @cursor.display?
      end

      def getExtents
        bounds = Geom::BoundingBox.new
        bounds.add(@start.position) if @start.valid?
        bounds.add(@cursor.position) if @cursor.valid?
        bounds
      end

      def onCancel(_reason, view)
        reset
        view.invalidate
      end

      private

      def pick(x, y, view)
        if @start.valid?
          @cursor.pick(view, x, y, @start)
        else
          @cursor.pick(view, x, y)
        end
      end

      def reset
        @start.clear
        @cursor.clear
        show_prompt
      end

      def show_prompt
        API.set_status_text(@start.valid? ? 'Click the end point (Esc to cancel).' : 'Click the start point.')
      end

      def add_edge(start_point, end_point)
        model = API.active_model
        model.start_operation(NAME, true)
        begin
          edge = model.active_entities.add_line(start_point, end_point)
          edge ? model.commit_operation : model.abort_operation
        rescue StandardError
          model.abort_operation
          raise
        end
      end
    end

    unless file_loaded?(__FILE__)
      UI.menu('Extensions').add_item(NAME) { API.active_model.select_tool(LineTool.new) }
      file_loaded(__FILE__)
    end
  end
end
