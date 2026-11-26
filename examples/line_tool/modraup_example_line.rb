# frozen_string_literal: true

require 'sketchup.rb'
require 'extensions.rb'

module ModraUpExamples
  module DrawLine
    unless file_loaded?(__FILE__)
      API = defined?(::ModraUp) ? ::ModraUp : ::Sketchup
      NAME = 'Two-Point Line'

      extension = SketchupExtension.new(NAME, 'modraup_example_line/main')
      extension.description = 'Draw an edge by picking two points in the model.'
      extension.version = '1.0.0'
      extension.creator = 'ModraUp Examples'
      API.register_extension(extension, true)
      file_loaded(__FILE__)
    end
  end
end
