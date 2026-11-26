# ModraUp Ruby API Reference

2408 entries.

## `(top-level)`

- `ORIGIN` — ORIGIN = Geom::ORIGIN
- `X_AXIS` — X_AXIS = Geom::X_AXIS
- `Y_AXIS` — Y_AXIS = Geom::Y_AXIS
- `Z_AXIS` — Z_AXIS = Geom::Z_AXIS
- `IDENTITY` — IDENTITY = Geom::IDENTITY
- `SKETCHUP_CONSOLE` — SKETCHUP_CONSOLE
- `FILE_WRITE_OK` — FILE_WRITE_OK = 0
- `FILE_WRITE_FAILED_INVALID_TYPE` — FILE_WRITE_FAILED_INVALID_TYPE = 1
- `FILE_WRITE_FAILED_UNKNOWN` — FILE_WRITE_FAILED_UNKNOWN = 2
- `SB_PROMPT` — SB_PROMPT = 0
- `SB_VCB_VALUE` — SB_VCB_VALUE = 1
- `SB_VCB_LABEL` — SB_VCB_LABEL = 2
- `MK_LBUTTON` — MK_LBUTTON
- `MK_RBUTTON` — MK_RBUTTON
- `MK_SHIFT` — MK_SHIFT
- `MK_CONTROL` — MK_CONTROL
- `MK_MBUTTON` — MK_MBUTTON
- `MK_ALT` — MK_ALT
- `MK_COMMAND` — MK_COMMAND = 1048576
- `CONSTRAIN_MODIFIER_MASK` — CONSTRAIN_MODIFIER_MASK
- `CONSTRAIN_MODIFIER_KEY` — CONSTRAIN_MODIFIER_KEY
- `COPY_MODIFIER_MASK` — COPY_MODIFIER_MASK
- `COPY_MODIFIER_KEY` — COPY_MODIFIER_KEY
- `ALT_MODIFIER_MASK` — ALT_MODIFIER_MASK
- `ALT_MODIFIER_KEY` — ALT_MODIFIER_KEY
- `VK_SPACE` — VK_SPACE = 32
- `VK_PRIOR` — VK_PRIOR
- `VK_NEXT` — VK_NEXT
- `VK_END` — VK_END
- `VK_HOME` — VK_HOME
- `VK_LEFT` — VK_LEFT
- `VK_UP` — VK_UP
- `VK_RIGHT` — VK_RIGHT
- `VK_DOWN` — VK_DOWN
- `VK_INSERT` — VK_INSERT = 45
- `VK_DELETE` — VK_DELETE
- `VK_SHIFT` — Shift virtual key code, used with +onKeyDown+ / +onKeyUp+. Top-level constant.
- `VK_CONTROL` — VK_CONTROL
- `VK_ALT` — VK_ALT
- `VK_MENU` — VK_MENU
- `VK_COMMAND` — VK_COMMAND
- `VK_ESCAPE` — VK_ESCAPE = 27
- `SnapTo_Arbitrary` — SnapTo_Arbitrary = 0
- `SnapTo_Horizontal` — SnapTo_Horizontal = 1
- `SnapTo_Vertical` — SnapTo_Vertical = 2
- `SnapTo_Sloped` — SnapTo_Sloped = 3
- `LAYER_VISIBLE_BY_DEFAULT` — LAYER_VISIBLE_BY_DEFAULT = 0
- `LAYER_HIDDEN_BY_DEFAULT` — LAYER_HIDDEN_BY_DEFAULT = 1
- `LAYER_USES_DEFAULT_VISIBILITY_ON_NEW_PAGES` — LAYER_USES_DEFAULT_VISIBILITY_ON_NEW_PAGES = 0
- `LAYER_IS_VISIBLE_ON_NEW_PAGES` — LAYER_IS_VISIBLE_ON_NEW_PAGES = 16
- `LAYER_IS_HIDDEN_ON_NEW_PAGES` — LAYER_IS_HIDDEN_ON_NEW_PAGES = 32
- `PAGE_USE_CAMERA` — PAGE_USE_CAMERA = 1
- `PAGE_USE_RENDERING_OPTIONS` — PAGE_USE_RENDERING_OPTIONS = 2
- `PAGE_USE_SHADOWINFO` — PAGE_USE_SHADOWINFO = 4
- `PAGE_USE_SKETCHCS` — PAGE_USE_SKETCHCS = 8
- `PAGE_USE_HIDDEN` — PAGE_USE_HIDDEN = 16
- `PAGE_USE_LAYER_VISIBILITY` — PAGE_USE_LAYER_VISIBILITY = 32
- `PAGE_USE_SECTION_PLANES` — PAGE_USE_SECTION_PLANES = 64
- `PAGE_USE_HIDDEN_GEOMETRY` — PAGE_USE_HIDDEN_GEOMETRY = 128
- `PAGE_USE_HIDDEN_OBJECTS` — PAGE_USE_HIDDEN_OBJECTS = 256
- `PAGE_USE_ENVIRONMENT` — PAGE_USE_ENVIRONMENT = 512
- `PAGE_USE_ALL` — PAGE_USE_ALL = 4294967295
- `TextAlignLeft` — TextAlignLeft = 0
- `TextAlignCenter` — TextAlignCenter = 1
- `TextAlignRight` — TextAlignRight = 2
- `TextVerticalAlignBoundsTop` — TextVerticalAlignBoundsTop = 0
- `TextVerticalAlignBaseline` — TextVerticalAlignBaseline = 1
- `TextVerticalAlignCapHeight` — TextVerticalAlignCapHeight = 2
- `TextVerticalAlignCenter` — TextVerticalAlignCenter = 3
- `ALeaderNone` — ALeaderNone = 0
- `ALeaderView` — ALeaderView = 1
- `ALeaderModel` — ALeaderModel = 2
- `GL_POINTS` — GL_POINTS = 0
- `GL_LINES` — GL_LINES = 1
- `GL_LINE_LOOP` — GL_LINE_LOOP = 2
- `GL_LINE_STRIP` — GL_LINE_STRIP = 3
- `GL_TRIANGLES` — GL_TRIANGLES = 4
- `GL_TRIANGLE_STRIP` — GL_TRIANGLE_STRIP = 5
- `GL_TRIANGLE_FAN` — GL_TRIANGLE_FAN = 6
- `GL_QUADS` — GL_QUADS = 7
- `GL_QUAD_STRIP` — GL_QUAD_STRIP = 8
- `GL_POLYGON` — GL_POLYGON = 9
- `MF_ENABLED` — MF_ENABLED = 0
- `MF_GRAYED` — MF_GRAYED = 1
- `MF_DISABLED` — MF_DISABLED = 2
- `MF_CHECKED` — MF_CHECKED = 8
- `MF_UNCHECKED` — MF_UNCHECKED = 0
- `TB_HIDDEN` — Top level {TB_HIDDEN}, with the same value as {UI::TB_HIDDEN}.
- `TB_VISIBLE` — Top level {TB_VISIBLE}.
- `TB_NEVER_SHOWN` — Top level {TB_NEVER_SHOWN}.
- `MB_OK` — Top level {MB_OK}.
- `MB_OKCANCEL` — Top level {MB_OKCANCEL}.
- `MB_ABORTRETRYIGNORE` — Top {MB_ABORTRETRYIGNORE}.
- `MB_YESNOCANCEL` — Top level {MB_YESNOCANCEL}.
- `MB_YESNO` — Top level {MB_YESNO}.
- `MB_RETRYCANCEL` — Top-level {MB_RETRYCANCEL}.
- `MB_MULTILINE` — Top level {MB_MULTILINE}.
- `IDOK` — Top level {IDOK}.
- `IDCANCEL` — Top-Level {IDCANCEL}.
- `IDABORT` — Top level {IDABORT}.
- `IDRETRY` — Top-level {IDRETRY}.
- `IDIGNORE` — Top Level {IDIGNORE}.
- `IDYES` — Top level {IDYES}.
- `IDNO` — Top Level {IDNO}.

## `Array`

SketchUp added several geometric methods to the standard Array: arrays of length 2 or 3 can be used as {Geom::Point3d} / {Geom::Vector3d} using (three numbers as inch coordinates). Reading {Array#x} returns the original element in the array (an Integer / Float / {Length}) without wrapping it in a new {Length}.

- `Array#cross` — Treat the array as a vector and compute the cross product with +vector+.
- `Array#distance` — Calculate the distance from each array element (point) to the +point+.
- `Array#distance_to_line` — Distance to an infinite line. The line is given as +[point, vector]+ / +[point, point]+, or as two separate parameters.
- `Array#distance_to_plane` — Distance to the plane. The plane is given as +[point, normal]+, +[A, B, C, D]+, three points, or a split parameter.
- `Array#dot` — Compute the dot product with the array treated as a vector and another vector.
- `Array#normalize` — Returns a new normalized array (Float inches), unitized and unmodified from the original array. A two-element array still returns two numbers.
- `Array#normalize!` — Normalize in place, elements changed to Float inches.
- `Array#offset` — Offset the array as points by translating them along the +vector+. Return a new array. Provide a +length+ to offset by that specific length.
- `Array#offset!` — Translates along the vector in place.
- `Array#on_line?` — Returns `true` if the point lies on an infinite line (within a length tolerance).
- `Array#on_plane?` — Checks if points are on a plane (within a length tolerance).
- `Array#project_to_line` — Project to an infinite line and return a new array.
- `Array#project_to_plane` — Project to plane and return a new array.
- `Array#transform` — Transform the array as points and return a new array. Does not include {Geom::Transformation2d} (LayOut, this issue not implemented).
- `Array#transform!` — Treats the array as a point and transforms it in place.
- `Array#vector_to` — Returns the vector from this array (as a point) to +point+. For a two-element array, assumes z=0; returns {Geom::Vector3d}, no Vector2d.
- `Array#x` — The 0th element (X). An empty array is +nil+, and it does not change the type.
- `Array#x=` — Set X (index 0), extend the array if necessary.
- `Array#y` — Returns the element at index 1 (Y), or +nil+ if the array has fewer than two elements.
- `Array#y=` — Set Y (index 1).
- `Array#z` — Returns the element at index 2 (Z), or +nil+ if the array has fewer than three elements.
- `Array#z=` — Set Z (index 2), expanding the two-element array into three elements.

## `Geom`

Geometry classes include {Geom::Point3d}, {Geom::Point2d}, {Geom::Vector3d}, {Geom::BoundingBox}, {Geom::Bounds2d}, {Geom::Transformation}, and {Geom::PolygonMesh}. The module also exposes line and plane tests, {Geom::ORIGIN}, {Geom::X_AXIS}, {Geom::Y_AXIS}, {Geom::Z_AXIS}, and {Geom::IDENTITY}. Represent a line as +[point, vector]+ or +[point, point]+. Represent a plane as +[point, normal]+ or four coefficients +[A, B, C, D]+ for the equation Ax + By + Cz + D = 0.

- `Geom.closest_points` — The closest pair of points on two infinite lines. The first point is on +line1+.
- `Geom.fit_plane_to_points` — Fit a plane to a set of points and return the coefficients for the equation Ax + By + Cz + D = 0. Allow for some points to not lie on the plane when more than three points are provided.
- `Geom.intersect_line_line` — Intersection point of two infinite lines; returns +nil+ if they are parallel and do not intersect.
- `Geom.intersect_line_plane` — The intersection point of an infinite line and a plane; returns +nil+ if they are parallel.
- `Geom.intersect_plane_plane` — Intersection of two planes +[point, direction]+; parallel planes return +nil+.
- `Geom.linear_combination` — Linear combination of two points or two vectors: +weight1 * a + weight2 * b+.
- `Geom.point_in_polygon_2D` — Does the point lie inside the polygon. Ignore the Z coordinate of the point with respect to the polygon vertices.
- `Geom.tesselate` — Triangulates a planar polygon and returns a flat list of points, three per triangle. Supply the outer loop counterclockwise and hole loops clockwise.
- `Geom::ORIGIN` — ORIGIN = Geom::Point3d.new(0, 0, 0)
- `Geom::X_AXIS` — X_AXIS = Geom::Vector3d.new(1, 0, 0)
- `Geom::Y_AXIS` — Y_AXIS = Geom::Vector3d.new(0, 1, 0)
- `Geom::Z_AXIS` — Z_AXIS = Geom::Vector3d.new(0, 0, 1)
- `Geom::IDENTITY` — IDENTITY = Geom::Transformation.new

## `Geom::BoundingBox`

Axis-aligned bounding box. Obtained from drawing elements such as {ModraUp::Face#bounds}.

- `Geom::BoundingBox#initialize` — An empty bounding box. Use {#add} to join points.
- `Geom::BoundingBox#add` — Merge a point, array of points, vertices, or another bounding box into it.
- `Geom::BoundingBox#min` — Minimum corner point.
- `Geom::BoundingBox#max` — Maximum corner point.
- `Geom::BoundingBox#center` — Center point.
- `Geom::BoundingBox#clear` — Clear the bounding box, making {#empty?} return true.
- `Geom::BoundingBox#contains?` — Does a point or another bounding box completely fall within this box.
- `Geom::BoundingBox#corner` — One of the eight corner points. +index+ ranges from 0..7, or can be a constant like {CORNER_LEFT_FRONT_BOTTOM}.
- `Geom::BoundingBox#width` — X-direction dimension, returns {Length}.
- `Geom::BoundingBox#height` — The height in the Y direction (along the green axis), returns {Length}.
- `Geom::BoundingBox#depth` — Depth in the Z direction (along the blue axis), returns {Length}.
- `Geom::BoundingBox#diagonal` — The length of the space diagonal, returns {Length}.
- `Geom::BoundingBox#empty?` — If no points have been added, it returns true. Opposite of {#valid?}.
- `Geom::BoundingBox#valid?` — Returns true if it contains at least one point.
- `Geom::BoundingBox#intersect` — Intersection with another bounding box. Returns an empty box if they do not intersect.
- `Geom::BoundingBox::CORNER_LEFT_FRONT_BOTTOM` — CORNER_LEFT_FRONT_BOTTOM = 0
- `Geom::BoundingBox::CORNER_RIGHT_FRONT_BOTTOM` — CORNER_RIGHT_FRONT_BOTTOM = 1
- `Geom::BoundingBox::CORNER_LEFT_BACK_BOTTOM` — CORNER_LEFT_BACK_BOTTOM = 2
- `Geom::BoundingBox::CORNER_RIGHT_BACK_BOTTOM` — CORNER_RIGHT_BACK_BOTTOM = 3
- `Geom::BoundingBox::CORNER_LEFT_FRONT_TOP` — CORNER_LEFT_FRONT_TOP = 4
- `Geom::BoundingBox::CORNER_RIGHT_FRONT_TOP` — CORNER_RIGHT_FRONT_TOP = 5
- `Geom::BoundingBox::CORNER_LEFT_BACK_TOP` — CORNER_LEFT_BACK_TOP = 6
- `Geom::BoundingBox::CORNER_RIGHT_BACK_TOP` — CORNER_RIGHT_BACK_TOP = 7

## `Geom::Bounds2d`

An axis-aligned rectangle defined by a top-left and bottom-right {Geom::Point2d}. In LayOut documents, the units are inches; {ModraUp::View#text_bounds} returns the bounds in viewport pixels.

- `Geom::Bounds2d#initialize` — Constructs a 2D bounding box. An empty box (zero point, zero size) is created with no parameters. `+float_array+` is `[x, y, width, height]`; `+point_array+` is an array of two points.
- `Geom::Bounds2d#set!` — Change in place to be the same box as the parameter. The parameter is the same as in {#initialize}.
- `Geom::Bounds2d#upper_left` — Upper left corner.
- `Geom::Bounds2d#lower_right` — Lower right corner.
- `Geom::Bounds2d#width` — Width (right-bottom X minus left-top X).
- `Geom::Bounds2d#height` — Height (right-bottom Y minus left-top Y).
- `Geom::Bounds2d#to_a` — +[upper_left, lower_right]+。
- `Geom::Bounds2d#==` — Returns true if the two edges are equal within the length tolerance.

## `Geom::Point2d`

Two-dimensional point. The corners of {ModraUp::View#text_bounds} are instances of this class. In LayOut, coordinates are in inches; viewport text boxes are in screen pixels.

- `Geom::Point2d#initialize` — Construct a 2D point. No arguments construct the origin point. Naked numbers are interpreted as inches; also accepts {Length}.
- `Geom::Point2d#x` — X coordinate.
- `Geom::Point2d#y` — Y coordinate.
- `Geom::Point2d#x=` — Set the X coordinate.
- `Geom::Point2d#y=` — Set the Y coordinate.
- `Geom::Point2d#[]` — +0+ is the X coordinate, and +1+ is the Y coordinate.
- `Geom::Point2d#[]=` — Write by component.
- `Geom::Point2d#clone` — Duplicates a point with the same coordinates.
- `Geom::Point2d#set!` — Sets the coordinates in place.
- `Geom::Point2d#to_a` — +[x, y]+。
- `Geom::Point2d#to_s` — Readable string representation.
- `Geom::Point2d#inspect` — Debug string.
- `Geom::Point2d#==` — Compares within length tolerance. +other+ can be a {Geom::Point2d} or +[x, y]+.
- `Geom::Point2d#distance` — Distance to another point.

## `Geom::Point3d`

A point in three-dimensional space. Coordinates are stored in inches, so a bare +1+ and +25.4.mm+ both represent one inch. As in SketchUp, {Geom::Point3d#x}, {Geom::Point3d#y}, {Geom::Point3d#z}, {Geom::Point3d#[]}, and {Geom::Point3d#distance} return a {Length}.

- `Geom::Point3d.linear_combination` — Weighted sum of two points: +weight1 * point1 + weight2 * point2+.
- `Geom::Point3d#initialize` — Constructs a point. With no arguments, it is the origin; with two components, Z is 0. Numeric literals are in inches; also accept {Length} (e.g., +1.mm+).
- `Geom::Point3d#x` — X coordinate, in internal inches {Length}. +pt.x.to_mm+ gets the Float in millimeters; +1000.mm+ stored and read back is still 1000 mm.
- `Geom::Point3d#y` — Y coordinate, in internal inches {Length}.
- `Geom::Point3d#z` — Z coordinate, in internal inches {Length}.
- `Geom::Point3d#x=` — Set the X coordinate.
- `Geom::Point3d#y=` — Set the Y coordinate.
- `Geom::Point3d#z=` — Set the Z coordinate.
- `Geom::Point3d#to_a` — Convert to `[x, y, z]`, where x, y, and z are float values in inches, unaffected by display units and precision.
- `Geom::Point3d#to_s` — +(x, y, z)+.
- `Geom::Point3d#distance` — Returns the Euclidean distance to another point, returning {Length}. +other+ can be a point or +[x, y, z]+.
- `Geom::Point3d#offset` — Offset the point along a vector, returning a new point. For a positive length, offset the point by that length in the direction of the vector.
- `Geom::Point3d#-` — Subtract another point to get a vector, or subtract a vector to get a new point.
- `Geom::Point3d#==` — Compare coordinates with another point or +[x, y, z]+.
- `Geom::Point3d#transform` — Apply a transformation to a point and return the new point. Accepts values convertible to Transformation, where Vector3d is treated as a translation.
- `Geom::Point3d#transform!` — Applies a transformation in place to the point. The transformation rules are the same as for #transform.
- `Geom::Point3d#+` — Add a vector to a Point3d, returning a new point.
- `Geom::Point3d#<` — Compare in dictionary order by X, Y, Z.
- `Geom::Point3d#[]` — Retrieve coordinates by index: 0 is X, 1 is Y, 2 is Z. Returns {Length}.
- `Geom::Point3d#[]=` — Set coordinates by index.
- `Geom::Point3d#clone` — Duplicates the point.
- `Geom::Point3d#inspect` — Debug string.
- `Geom::Point3d#offset!` — Translates along the vector in place.
- `Geom::Point3d#vector_to` — Returns a vector from this point to another point.
- `Geom::Point3d#distance_to_line` — Distance to an infinite line. The line is defined as either +[point, vector]+ or +[point, point]+.
- `Geom::Point3d#distance_to_plane` — Distance to the plane. The plane is given as either +[point, normal]+ or +[A, B, C, D]+.
- `Geom::Point3d#on_line?` — Does the point lie on the infinite line (within a length tolerance).
- `Geom::Point3d#on_plane?` — Does the point lie on the plane (within a length tolerance).
- `Geom::Point3d#project_to_line` — Projects to the nearest point on an infinite line.
- `Geom::Point3d#project_to_plane` — Projects to the nearest point on the plane.
- `Geom::Point3d#set!` — Sets the coordinates of the point.

## `Geom::PolygonMesh`

Triangulated mesh snapshot for export and use with {ModraUp::Face#mesh}, not a BRep journal. Points and polygon indices start at 1; negative indices indicate hidden edges.

- `Geom::PolygonMesh#initialize` — An empty mesh. Optional parameters only reserve capacity (up to approximately 1 million per item), leaving no points; points can still be added later.
- `Geom::PolygonMesh#add_point` — Add a point and return the point number starting from 1.
- `Geom::PolygonMesh#add_polygon` — Add a polygon. Parameters are vertex indices starting from 1 (negative values indicate an implied edge), or at least three points. Returns 0 if the operation fails.
- `Geom::PolygonMesh#count_points` — Number of points.
- `Geom::PolygonMesh#count_polygons` — Number of polygons.
- `Geom::PolygonMesh#points` — All points, in order with 1-based indexing.
- `Geom::PolygonMesh#polygons` — The vertex indices for all polygons (starting at 1; negative values indicate hidden edges).
- `Geom::PolygonMesh#point_at` — The starting point. Out-of-bounds is +nil+.
- `Geom::PolygonMesh#point_index` — The point index starts at 1; if there is no point, it is 0.
- `Geom::PolygonMesh#polygon_at` — The starting vertex index of the polygon. Out-of-bounds returns +nil+.
- `Geom::PolygonMesh#polygon_points_at` — Polygon vertex coordinates. Out-of-bounds is +nil+.
- `Geom::PolygonMesh#set_point` — Updates an existing point. An out-of-range index is ignored.
- `Geom::PolygonMesh#set_uv` — Sets the UV for the point (using +Point3d+ x/y coordinates). The default front face is assumed.
- `Geom::PolygonMesh#uv_at` — The UV of the point. Returns +nil+ if not set.
- `Geom::PolygonMesh#uvs` — Array of UVs for all points; is empty if not set.
- `Geom::PolygonMesh#normal_at` — The normal at the point. Returns +nil+ if not set.
- `Geom::PolygonMesh#transform!` — Transform all points in place.
- `Geom::PolygonMesh::NO_SMOOTH_OR_HIDE` — NO_SMOOTH_OR_HIDE = 0
- `Geom::PolygonMesh::HIDE_BASED_ON_INDEX` — HIDE_BASED_ON_INDEX = 1
- `Geom::PolygonMesh::SOFTEN_BASED_ON_INDEX` — SOFTEN_BASED_ON_INDEX = 2
- `Geom::PolygonMesh::AUTO_SOFTEN` — AUTO_SOFTEN = 4
- `Geom::PolygonMesh::SMOOTH_SOFT_EDGES` — SMOOTH_SOFT_EDGES = 8

## `Geom::Transformation` · OS3D

A column-major 4 × 4 matrix for translation, rotation, scaling, and composition by matrix multiplication.

- `Geom::Transformation.translation` — Translation.
- `Geom::Transformation.rotation` — Rotates by +angle+ radians around an axis passing through +origin+ with direction +axis+.
- `Geom::Transformation.scaling` — Uniform or axis-aligned scaling; scale about a point when an origin is specified.
- `Geom::Transformation.axes` — Construct a coordinate system transformation from the origin and axis vectors. Omitting +zaxis+ uses X×Y.
- `Geom::Transformation.interpolate` — Linearly interpolate matrix elements between two transformations based on +weight+ (0..1).
- `Geom::Transformation#initialize` — With no arguments, constructs the identity. A point or vector specifies translation, a single number specifies uniform scaling, and an existing transformation is copied. An array of 16 numbers supplies a column-major matrix. With an origin and +zaxis+, the arbitrary-axis rule supplies X and Y. With three arguments, a numeric third argument specifies rotation about an axis in radians. Otherwise the arguments specify an origin and X and Y axes. Four arguments specify the X, Y, and Z axes followed by the origin. Axes specify directions only. To include scale in a matrix, use the 16-element array.
- `Geom::Transformation#to_a` — 16 numbers, in column-major order.
- `Geom::Transformation#origin` — The translation component.
- `Geom::Transformation#xaxis` — The X-axis of the rigid transformation (matrix first column, includes scaling).
- `Geom::Transformation#yaxis` — The Y-axis of the rigid transformation (matrix second column, including scaling).
- `Geom::Transformation#zaxis` — The Z-axis of the rigid transformation (matrix's third column, including scaling).
- `Geom::Transformation#rotx` `OS3D` — Euler angle rotation around the X-axis in degrees.
- `Geom::Transformation#roty` `OS3D` — Euler angle rotation around the Y-axis in degrees.
- `Geom::Transformation#rotz` `OS3D` — Euler angle rotation around the Z-axis, in degrees.
- `Geom::Transformation#identity?` — Returns whether the transformation is an identity matrix.
- `Geom::Transformation#inverse` — Inverse transformation. Throws an error if not invertible.
- `Geom::Transformation#invert!` — Inverts the transformation in place. Raises an error if inversion is not possible.
- `Geom::Transformation#clone` — Clones a transformation.
- `Geom::Transformation#set!` — Overwrite itself with another transformation, point (translation), vector (translation), 16-element array, or uniform scale factor.
- `Geom::Transformation#*` — Multiply by another transformation, point, vector, +[x, y, z]+, or plane (quadruple +[a, b, c, d]+ / +[point, normal]+).

## `Geom::Vector3d` · OS3D

Three-dimensional vector. {#length} and {#[]} return Length; {#x}, {#y}, {#z}, and {#to_a} are in inches as Floats (consistent with SketchUp documentation; {Geom::Point3d#x} is Length).

- `Geom::Vector3d.linear_combination` — Linear combination of two vectors, or a linear combination along three axes.
- `Geom::Vector3d#initialize` — Construct a vector. With no parameters, it initializes to the zero vector; with two components, the Z component is 0. Bare numbers are interpreted in inches; alternatively, a {Length} can be passed.
- `Geom::Vector3d#x` — X component, inches Float. Unlike {Geom::Point3d#x} {Length}.
- `Geom::Vector3d#y` — Y component, inches Float.
- `Geom::Vector3d#z` — Z component, inches Float.
- `Geom::Vector3d#to_a` — Convert to `[x, y, z]`, where x, y, and z are floats, consistent with {Geom::Point3d#to_a}.
- `Geom::Vector3d#to_s` — +(x, y, z)+.
- `Geom::Vector3d#length` — Vector length, returns {Length}.
- `Geom::Vector3d#==` — Compare components with another vector, point, or +[x, y, z]+.
- `Geom::Vector3d#%` — Dot product.
- `Geom::Vector3d#*` `OS3D` — takes the cross product with another vector; multiplies by a Numeric value.
- `Geom::Vector3d#+` — Adds two vectors.
- `Geom::Vector3d#-` — Subtracts one vector from another.
- `Geom::Vector3d#<` — Compare by length.
- `Geom::Vector3d#[]` — Return the component at the specified index as a {Float}.
- `Geom::Vector3d#[]=` — Set the components by index.
- `Geom::Vector3d#x=` — Set the X component.
- `Geom::Vector3d#y=` — Set the Y component.
- `Geom::Vector3d#z=` — Set the Z component.
- `Geom::Vector3d#angle_between` — The angle between another vector, in radians.
- `Geom::Vector3d#axes` — Construct a set of orthogonal axes +[x, y, z]+ with the vector as the +Z+ axis.
- `Geom::Vector3d#clone` — Clones a vector.
- `Geom::Vector3d#cross` — Cross product.
- `Geom::Vector3d#dot` — Dot product.
- `Geom::Vector3d#inspect` — Debug string.
- `Geom::Vector3d#length=` — Keep the direction but change the length.
- `Geom::Vector3d#normalize` — Returns the unit vector, without modifying self.
- `Geom::Vector3d#normalize!` — Makes the vector a unit vector in place.
- `Geom::Vector3d#parallel?` — Checks if the vectors are parallel within a tolerance.
- `Geom::Vector3d#perpendicular?` — Checks if the vectors are perpendicular (within tolerance).
- `Geom::Vector3d#reverse` — Reverse, returns a new vector.
- `Geom::Vector3d#reverse!` — Reverses the vector in place.
- `Geom::Vector3d#samedirection?` — Returns true if the vectors are parallel and in the same direction.
- `Geom::Vector3d#set!` — Sets the components.
- `Geom::Vector3d#unitvector?` — Is the length within the tolerance of 1.0.
- `Geom::Vector3d#valid?` — Returns true if the vector is non-zero.
- `Geom::Vector3d#transform!` — Applies the 3×3 transformation part of the transform to the vector in place.
- `Geom::Vector3d#transform` — Applies the 3×3 part of the transformation to the vector and returns the new vector.

## `Kernel`

- `Kernel#file_loaded?` — Does this path already have a record of being {Kernel#file_loaded}. Implemented in +app/resources/Tools/modraup.rb+ (for compatibility with +sketchup.rb+). Compare using +$loaded_files+ (downcase).
- `Kernel#file_loaded` — Record that the plugin file has been loaded to avoid redundant menu entries and other side effects. If it has already been recorded, no further additions will be made.

## `LanguageHandler`

Language string table. Implemented in +app/resources/Tools/modraup_langhandler.rb+, where +langhandler.rb+ is the compatibility entry point and is required when the host starts. It reads the +.strings+ file by locale; if the file or entry is missing, {#GetString} / {#[]} falls back to the key.

- `LanguageHandler#initialize`
- `LanguageHandler#GetString` — Return the +key+ itself (copy) when the table or key is missing.
- `LanguageHandler#[]` — Alias for {#GetString}.
- `LanguageHandler#GetStrings` — The loaded translation table. Returns an empty Hash when +.strings+ is missing; defaults to returning the key when a key is missing.

## `Layout` · OS3D

Paper-space drawing API, named after the LayOut Ruby API. Access the document through {ModraUp::Model#layout_document}. Drawings are saved with the model, separately from model attributes. Standalone opening or saving of +.layout+ files is unsupported.


## `Layout::AngularDimension` · OS3D · `< Layout::Entity`

Angle Dimension: The angle between two edges, with the arc of the dimension centered at the intersection of the two dimension lines. The connection points are on the edges being measured, and the extension points are at the ends of the arc. The value is the paper angle (in degrees), with the text, endpoints, and height sharing the same naming style as other dimensions.

- `Layout::AngularDimension#initialize` — Create an angular dimension. The +start_point+ and +end_point+ are points on the measured edges, while the +start_extent_point+ and +end_extent_point+ are the endpoints of the dimension arc. The intersection of the two dimension lines (from the measured points to the extent points) is the center of the dimension arc, and the radius is the distance from the center to the +start_extent_point+.
- `Layout::AngularDimension#angle` — The angle measured in radians.
- `Layout::AngularDimension#radius` — The distance from the center to the dimension arc.
- `Layout::AngularDimension#radius=` — Modify the dimension arc radius, one step undo; the measured point and the center remain unchanged.
- `Layout::AngularDimension#arc_center_point` — The arc center point (the intersection of two edge lines).
- `Layout::AngularDimension#start_connection_point` — The measurement point on the first edge.
- `Layout::AngularDimension#start_connection_point=` — Move the measurement point on the first edge one step back; recalculate the dimension center based on the dimension line.
- `Layout::AngularDimension#end_connection_point` — The measured point on the second edge.
- `Layout::AngularDimension#end_connection_point=` — Move the measurement point on the second edge, one step undo.
- `Layout::AngularDimension#start_extent_point` — The start of the dimension arc.
- `Layout::AngularDimension#start_extent_point=` — Move the start extent point of the angular dimension arc, one step in undo; the radius changes accordingly with the measured angle.
- `Layout::AngularDimension#end_extent_point` — The end of the dimension arc.
- `Layout::AngularDimension#end_extent_point=` — Move the end extent point of the angular dimension arc, one step undo.
- `Layout::AngularDimension#start_offset_point` — The starting point of the first dimension line; when the dimension arc falls on an edge and no dimension line is drawn, it equals {#start_extent_point}.
- `Layout::AngularDimension#end_offset_point` — The starting point of the second dimension line.
- `Layout::AngularDimension#text` — Displays the text copy (degrees, such as +45°) centered on the dimension.
- `Layout::AngularDimension#text=` `OS3D` — Customize the text (use its plain text), where +<>+ represents the angle, and this step is undoable.
- `Layout::AngularDimension#custom_text?` — Whether to use custom text.
- `Layout::AngularDimension#custom_text=` — Pass `false` to restore the display of the angle.

## `Layout::ArcDimension` · OS3D · `< Layout::Entity`

Arc length dimension for a circular arc: The dimension arc is concentric with the circular arc, the dimension lines are radial, and a circular arc symbol is drawn above the numeric value (GB/T 50001).

- `Layout::ArcDimension#initialize` — Create a new arc dimension. The arc spans from the +start_point+ around the +center_point+ to the +end_point+ in the direction on the paper plane, with the radius taken as the distance from the +start_point+ to the center. The offset +offset+ is the distance from the dimension arc to the arc, with negative values indicating an inner offset.
- `Layout::ArcDimension#arc_center_point` — Center.
- `Layout::ArcDimension#start_point` — Arc start point.
- `Layout::ArcDimension#end_point` — Arc endpoint.
- `Layout::ArcDimension#offset` — The distance of the arc dimension from the arc (negative values place it inside the arc).
- `Layout::ArcDimension#offset=` — Offset the arc dimension position, one step in the undo.
- `Layout::ArcDimension#counter_clockwise?` — Does the arc on the drawing sheet turn counterclockwise from the start point to the end point.
- `Layout::ArcDimension#arc_length` — Arc length on the plane (unscaled).
- `Layout::ArcDimension#text` — Display the copy of the text (arc length value; the arc symbol is drawn above the value, not within the text).
- `Layout::ArcDimension#text=` — Customize the text, use +<>+ for the arc length, and perform one undo step.
- `Layout::ArcDimension#custom_text?` — Whether to use custom text.
- `Layout::ArcDimension#custom_text=` — Set false to restore the display of arc length.
- `Layout::ArcDimension#scale` — Scale factor (ratio).
- `Layout::ArcDimension#scale=` — Set the scale factor for the radial dimension, and perform an undo step.
- `Layout::ArcDimension#precision` — Decimal places; -1 follows the model's setting.
- `Layout::ArcDimension#precision=` — Set the decimal precision, with one step in undo.

## `Layout::ConnectionPoint` · OS3D

Association between dimensions or leaders and model points within a viewport. After association, the annotations automatically follow when the viewport is moved, scaled, or the model is altered.

- `Layout::ConnectionPoint#initialize` — A model point in a viewport.
- `Layout::ConnectionPoint#entity` `OS3D` — Associated viewport.
- `Layout::ConnectionPoint#point` `OS3D` — Associated model point.

## `Layout::Document` · OS3D

A layout document embedded within a model. Each model has one, obtained via {ModraUp::Model#layout_document}; accessing it after the model is closed throws a +TypeError+. The layout is saved with the model and does not have a separate +.layout+ file.

- `Layout::Document.templates` `OS3D` — Lists system drawing templates and user +.osklt+ files, excluding the built-in blank template. Each entry is a Hash with string keys +"name"+ and +"path"+. System and user templates are each sorted by filename. Use {#apply_template} to apply a template.
- `Layout::Document#apply_template` `OS3D` — Apply a template to a document that has no drawings: import the page size, margins, border frames, grids, dynamic text, title block fields, layers, dimension styles, and page objects from the template; subsequently, {Layout::Pages#add} new pages will use the paper size and objects from the first interior page of the template. Templates without a cover page will use the first page.
- `Layout::Document#pages` — All drawing pages in the order of the drawings.
- `Layout::Document#layers` — The layer list is ordered with the first layer on top. A new document starts with a default layer and a shared layer named "Every Page Display".
- `Layout::Document#path` — The file path of the model's layout document, which is an empty string if the document is not saved.
- `Layout::Document#page_info` — The paper size and margins of the drawing sheet; all pages share a single set, applied to every page.
- `Layout::Document#add_entity` — Place the newly created object on the drawing sheet, with one-step undo. If no `+page+` is given, `+layer+` must be a shared layer. If the object extends beyond the sheet edges, it is clipped back within the sheet boundaries. If the object is larger than the sheet, an `ArgumentError` is raised. After placement, the object's bounds can be retrieved using `{Layout::Entity#bounds}`.
- `Layout::Document#remove_entity` — Remove the entity, with one-step undo. When deleting a section or detail view, the section symbol or detail box on the source viewport is also removed, consistent with the interface.
- `Layout::Document#shared_entities` — Objects on shared layers (displayed on every page).
- `Layout::Document#title_block` `OS3D` — Title block common fields (displayed in the title block by the template): project, company, designer, checker, approver, date.
- `Layout::Document#get_attribute` — Read document-level plugin data.
- `Layout::Document#set_attribute` `OS3D` — Write document-level plugin data with a single undo step. The value can only be nil, true, false, a number, a string, an Array, or a Hash (with Hash keys as strings).
- `Layout::Document#delete_attribute` — Delete a key or an entire dictionary.
- `Layout::Document#export` `OS3D` — Exports sheets to PDF using the same process as the Export dialog. Missing or stale model views in the selected range are updated before the file is written. Failure, cancellation, or a model change during export preserves the original file. The call returns immediately. On completion, the block receives +ok+, indicating whether the file was written, and +message+, the result shown in the interface. On success the message includes vector and raster view counts. On failure it gives the reason. The block may call +export+ again.
- `Layout::Document#==` — Is the drawing sheet for the same model document.
- `Layout::Document#inspect` — A brief description.
- `Layout::Document#select_tool` `OS3D` — Select the paper tool. +tool+ must be an object (with the same name and parameters) that implements ModraUp::Tool callback methods ({ModraUp::Tool.activate}, {ModraUp::Tool.deactivate}, {ModraUp::Tool.onMouseMove}, {ModraUp::Tool.onLButtonDown}, {ModraUp::Tool.onLButtonUp}, {ModraUp::Tool.onLButtonDoubleClick}, {ModraUp::Tool.onRButtonDown}, {ModraUp::Tool.onRButtonUp}, {ModraUp::Tool.onKeyDown}, {ModraUp::Tool.onKeyUp}, {ModraUp::Tool.onReturn}, {ModraUp::Tool.onCancel}, {ModraUp::Tool.onUserText}, {ModraUp::Tool.enableVCB?}, {ModraUp::Tool.draw}). The +view+ parameter in the callback is a Layout::PaperView, and +x+ and +y+ are logical pixels within the paper area, which can be converted to paper coordinates using Layout::PaperView#paper_point. Entering this tool will take you to the drawing workspace; passing +nil+ will return to the document selection tool.
- `Layout::Document#tool` `OS3D` — The currently selected viewport tool; nil if none is selected.
- `Layout::Document#add_observer` `OS3D` — Add a drawing observer. Observers need only implement the methods they are interested in, with the first parameter always being the document:
- `Layout::Document#remove_observer` `OS3D` — Remove the document observer.
- `Layout::Document#selection` `OS3D` — The current selection in the drawing workspace consists of the primary paper objects. If the document is not the current document being displayed in the workspace, the selection is an empty array.
- `Layout::Document#selection=` `OS3D` — Set the sheet selection. Accept an object, array of objects, or +nil+ (to clear). The objects must be on the same drawing sheet (objects on shared layers are considered on each sheet); if not on the current sheet, switch to that sheet. This does not affect the undo history.
- `Layout::Document#active_page` `OS3D` — The drawing sheet currently displayed in the Layout::Document active_page. Returns +nil+ if the document is not the active page or there is no drawing sheet.
- `Layout::Document#active_page=` `OS3D` — Displays a different sheet in the drawing workspace and clears the paper-space selection. This change does not add an undo step.

## `Layout::Ellipse` · OS3D · `< Layout::Path`

Ellipse (closed path).

- `Layout::Ellipse#initialize` `OS3D` — An ellipse inscribed in a bounding box; a square bounding box results in a circle.

## `Layout::Entities`

A collection of drawing entities obtained from {Layout::Page#entities}, {Layout::Page#nonshared_entities}, or {Layout::Document#shared_entities}. Iteration proceeds from bottom to top in stacking order. Each access reflects the current drawing.

- `Layout::Entities#length` — Number of objects.
- `Layout::Entities#size` — Alias for {#length}.
- `Layout::Entities#each` — Traverse from bottom to top.
- `Layout::Entities#[]` — Retrieve objects by position, with 0 being at the bottom.

## `Layout::Entity` · OS3D

The base class for drawing entities. Objects created using +Layout::Rectangle.new+ and similar methods do not belong to any document until added with {Layout::Document#add_entity}. Before addition, any set properties are written at the time of joining. After joining, each modification is a step in the undo history; accessing the object after deletion raises a +TypeError+, and undoing brings it back to a usable state.

- `Layout::Entity#bounds` — The bounding box after rotation, in paper inches.
- `Layout::Entity#untransformed_bounds` — Unrotated bounds (x, y, width, height), paper inches.
- `Layout::Entity#untransformed_bounds=` — Modify position and size, with one undo step. The rules are the same as for the layout: the view preserves scale on resize (default) when {Layout::SketchUpModel#preserve_scale_on_resize?} is true, otherwise it scales by height only; dimensions and leaders only move and do not scale. If they extend beyond the paper edge, they are clipped back within the paper.
- `Layout::Entity#style` — A copy of the current style. Modifying the copy does not affect the object; use `{#style=}` to apply the changes.
- `Layout::Entity#style=` — Apply the style, undoing one step. Only apply properties relevant to the object type (e.g., text ignoring line type).
- `Layout::Entity#page` — The current page; objects on shared layers or those not yet added to the document are nil.
- `Layout::Entity#document` — Belongs to a Layout::Entity document; is nil if not added yet.
- `Layout::Entity#on_shared_layer?` — Returns true if the entity is on a shared layer.
- `Layout::Entity#layer_instance` — The layer it resides on; nil if not added yet.
- `Layout::Entity#move_to_layer` — Move to another layer, one undo step. Objects on a shared layer remain on their associated page when moved to a regular layer.
- `Layout::Entity#rotation` `OS3D` — Rotation angle around the bounding box center (degrees).
- `Layout::Entity#rotation=` `OS3D` — Rotate around the bounding box center, one step in undo. Dimensions and leaders do not accept rotation (they follow their endpoints).
- `Layout::Entity#get_attribute` — Read plugin data on the object. Plugins can use this to identify objects they generate, such as re-creating automatic leader and dimension annotations.
- `Layout::Entity#set_attribute` `OS3D` — Save plugin data on the object with a single undo step. Values can only be types that JSON can represent (nil, true, false, numbers, strings, Array, Hash), and a single object should not exceed 64 KB.
- `Layout::Entity#delete_attribute` — Delete a key or an entire dictionary.
- `Layout::Entity#attribute_dictionary` `OS3D` — A copy of a dictionary.
- `Layout::Entity#locked?` `OS3D` — Unsupported: OpenSu does not support object-level locking (please lock the layer).
- `Layout::Entity#locked=` `OS3D` — Unsupported: OpenSu does not support object-level locking (please lock the layer).
- `Layout::Entity#transform!` `OS3D` — Unsupported: OpenSu does not support +Geom::Transformation2d+. For translation, use {#untransformed_bounds=}, and for rotation, use {#rotation=}.
- `Layout::Entity#group` `OS3D` — Does not support: OpenSu drawings cannot be grouped.
- `Layout::Entity#==` — Returns whether the two references identify the same drawing entity.
- `Layout::Entity#eql?` — Like #==, used as a key in a Hash.
- `Layout::Entity#hash` — Hash value consistent with {#eql?}.
- `Layout::Entity#inspect` — A brief description.

## `Layout::FormattedText` · `< Layout::Entity`

Formatted text. Font size, font type, color, and alignment are defined using {Layout::Entity#style}.

- `Layout::FormattedText#initialize` — Create text. Place the text box according to the content size when anchoring points are provided (layout the text box based on the content size, calculating the font size when adding to the document); place paragraphs aligned to the left, center, or right based on the anchoring points. When bounding boxes are provided, the text wraps within the box. The default font, size, and color are taken from the model's text settings.
- `Layout::FormattedText#plain_text` — Content of the text.
- `Layout::FormattedText#plain_text=` — Modify the text content, with one-step undo. The text box size remains unchanged.
- `Layout::FormattedText#display_text` — The text to display (OpenSu does not have automatic text fields, same as {#plain_text}).
- `Layout::FormattedText::ANCHOR_TYPE_TOP_LEFT` — The anchor is at the top left of the text.
- `Layout::FormattedText::ANCHOR_TYPE_CENTER_LEFT` — The anchor point is at the center left of the text.
- `Layout::FormattedText::ANCHOR_TYPE_BOTTOM_LEFT` — The anchor is at the bottom left of the text.
- `Layout::FormattedText::ANCHOR_TYPE_TOP_RIGHT` — The anchor is at the top right of the text.
- `Layout::FormattedText::ANCHOR_TYPE_CENTER_RIGHT` — The anchor point is at the center right of the text.
- `Layout::FormattedText::ANCHOR_TYPE_BOTTOM_RIGHT` — The anchor is at the bottom right of the text.
- `Layout::FormattedText::ANCHOR_TYPE_TOP_CENTER` — The anchor point is at the top center of the text.
- `Layout::FormattedText::ANCHOR_TYPE_CENTER_CENTER` — The anchor point is at the center of the text.
- `Layout::FormattedText::ANCHOR_TYPE_BOTTOM_CENTER` — The anchor point is at the bottom center of the text.

## `Layout::Image` · OS3D · `< Layout::Entity`

Images on drawings (png, jpg, bmp, gif, webp, tif, svg). They are managed in a reference mode: the model only records the file path (relative or absolute), size, and modification time; it does not store pixel data. If the file is moved or deleted, a placeholder is displayed on the drawing. Rotation is controlled with {Layout::Entity#rotation=}, and cropping is managed with {#clip_mask=}.

- `Layout::Image#initialize` — Create an image from a file and then add it to the drawing using {Layout::Document#add_entity}. When adding, read the file dimensions; if the dimensions cannot be read, raise an error. Multiple images from the same file share a single reference.
- `Layout::Image#clip_mask` — Clipping Mask: The image is displayed only within the shape. Returns a copy of the shape (in paper coordinates) not in the document; when there is no mask, it returns nil.
- `Layout::Image#clip_mask=` — Sets the clip mask; pass nil to remove the mask. The shape must be a closed rectangle, ellipse, or path, and not yet added to the document; after which the mask moves, scales, and rotates with the image. One step of undo.
- `Layout::Image#image_rep` `OS3D` — The pixel from the current position in the image file.

## `Layout::Label` · OS3D · `< Layout::Entity`

Annotation: Arrows, leader lines, and text. The arrow end can be attached to a model point in the viewport.

- `Layout::Label#initialize` `OS3D` — Create a leader. The arrowhead is at the +target_point+, and the text is anchored at the +anchor_point+ (or the midpoint of the text box near the arrowhead); break points are automatically placed 5 mm above the anchor point on the same horizontal line toward the arrowhead direction.
- `Layout::Label#connect` — Associate the arrow to a model point in the viewport, one step undo (takes effect upon addition if not already joined).
- `Layout::Label#disconnect` — Disconnect association, one step undo.
- `Layout::Label#text` — Duplicates the text of the leader; changes to the duplicate do not affect the leader.
- `Layout::Label#text=` `OS3D` — Render the label text as plain text, and undo the last step.
- `Layout::Label#leader_line_type` — Leader line type.
- `Layout::Label#leader_line_type=` — Change the leader line type, one step undo.
- `Layout::Label::LEADER_LINE_TYPE_SINGLE_SEGMENT` `OS3D` — Single-segment leader line in LayOut.
- `Layout::Label::LEADER_LINE_TYPE_TWO_SEGMENT` — A leader with two line segments.
- `Layout::Label::LEADER_LINE_TYPE_BEZIER` — Curved leader line.
- `Layout::Label::LEADER_LINE_TYPE_UNKNOWN` — Unknown leader line type.

## `Layout::Layer`

Layer definition. Objects on shared layers are displayed on every page; those on locked or hidden layers cannot be modified.

- `Layout::Layer#name` — Layer name.
- `Layout::Layer#name=` — Rename (non-empty, up to 200 characters), one-step undo.
- `Layout::Layer#locked?` — Returns whether it is locked.
- `Layout::Layer#locked=` — Lock or unlock, with a single undo step.
- `Layout::Layer#shared?` — Whether shared (displayed on every page).
- `Layout::Layer#set_shared` — Change to shared layer, one step undo.
- `Layout::Layer#set_nonshared` — Change to a regular layer, with one-step undo.
- `Layout::Layer#layer_instance` — An instance of the layer on the page.
- `Layout::Layer#document` — The owning document.
- `Layout::Layer#==` — Does the same layer apply.
- `Layout::Layer#eql?` — Like #==, used as a key in a Hash.
- `Layout::Layer#hash` — Hash value consistent with {#eql?}.
- `Layout::Layer#inspect` — A brief description.
- `Layout::Layer::SHARELAYERACTION_CLEAR` — {#set_shared}: Clear the objects on the layer first.
- `Layout::Layer::SHARELAYERACTION_KEEPONEPAGE` — {#set_shared}: Keep objects only on the specified page.
- `Layout::Layer::SHARELAYERACTION_MERGEALLPAGES` — {#set_shared}: Merge objects from all pages.
- `Layout::Layer::UNSHARELAYERACTION_CLEAR` — {#set_nonshared}: Clear the objects on the layer first.
- `Layout::Layer::UNSHARELAYERACTION_COPYTOONEPAGE` — {#set_nonshared}: Place the object on the specified page.
- `Layout::Layer::UNSHARELAYERACTION_COPYTOALLPAGES` — {#set_nonshared}: Copy the object to every page.

## `Layout::LayerInstance`

An instance of a layer on the page, obtained by {Layout::Entity#layer_instance} or {Layout::Layer#layer_instance}.

- `Layout::LayerInstance#definition` — The corresponding layer definition.
- `Layout::LayerInstance#==` — Are instances on the same layer.

## `Layout::Layers` · OS3D

The list of layout layers, with the first one at the top and enumerable.

- `Layout::Layers#length` — Number of layers.
- `Layout::Layers#size` — Alias for {#length}.
- `Layout::Layers#each` — Traverse the layers from top to bottom.
- `Layout::Layers#[]` — Retrieve a layer by index or name.
- `Layout::Layers#index` — Layer position, with 0 being at the topmost position.
- `Layout::Layers#active` `OS3D` — The current layer is default, which is named "Default Layer".
- `Layout::Layers#active=` — Set the current layer.
- `Layout::Layers#add` — Create a new layer at the top, and undo it in one step.
- `Layout::Layers#remove` — Remove layers and their objects in one undo step. The default layer cannot be deleted.
- `Layout::Layers#reorder` — Move the layer to a new position, with one-step undo.

## `Layout::LinearDimension` · OS3D · `< Layout::Entity`

Linear dimensions. Once associated with a viewport model point ({#connect}), the value displays in model units and updates automatically with viewport movement, scaling, and model changes; unassociated dimensions show the paper length in millimeters, which can be converted using {#scale=}.

- `Layout::LinearDimension.create_chain` `OS3D` — A chain of horizontally or vertically aligned dimensions (not yet added to the document).+:continuous+ segments are connected end-to-end sharing a single dimension line;+:baseline+ all segments start from the first point and incrementally offset vertically (offset 7 mm). The first segment is the baseline, and+:height+ determines the position of the dimension line. After adding to the document, the entire chain aligns to the baseline, and when associated with a viewport, it updates with the viewport.
- `Layout::LinearDimension#initialize` — Create a linear dimension. +height+ is the distance from the dimension line to the start point, with a positive value on the left side of the direction from start to end (above the dimension line when annotated from left to right).
- `Layout::LinearDimension#connect` — Connect two endpoints to model points in the viewport, one step undoable (takes effect upon addition if not already added). If one end is nil, it is not associated. During writing, recalculate the paper position and value based on the viewport.
- `Layout::LinearDimension#disconnect` — Disconnect the association, leaving the dimension in its current position; a single undo step.
- `Layout::LinearDimension#start_connection_point` — The connection point at the start; nil if unconnected or the viewport has been deleted.
- `Layout::LinearDimension#end_connection_point` — The connection point at the end.
- `Layout::LinearDimension#start_extent_point` — The measured start extent point (paper inches).
- `Layout::LinearDimension#end_extent_point` — The end extent point of the measured feature.
- `Layout::LinearDimension#start_extent_point=` — Move the start extent point one step back, undoing the change. Like dragging in the interface: the associated endpoint will be disassociated.
- `Layout::LinearDimension#end_extent_point=` — Move the end point, one step undo.
- `Layout::LinearDimension#start_offset_point` — The start of the dimension line.
- `Layout::LinearDimension#end_offset_point` — The end of the dimension line.
- `Layout::LinearDimension#text` — The copy of the displayed dimension text (formatted in model units for model length when associated), located at the center of the dimension; this copy does not affect the dimension.
- `Layout::LinearDimension#text=` `OS3D` — Customize the text (use plain text), where +<>+ represents the measurement value, and allow one step of undo.
- `Layout::LinearDimension#custom_text?` — Whether to use custom text.
- `Layout::LinearDimension#custom_text=` — Pass `false` to restore the measurement value display; use `{#text=}` to set custom text.
- `Layout::LinearDimension#scale` — Scale factor (ratio). Automatically equals the viewport scale when associated.
- `Layout::LinearDimension#scale=` — Set the scale factor for unassociated dimensions, undoing the last change.
- `Layout::LinearDimension#auto_scale?` — Is the scale automatically derived from the associated viewport.
- `Layout::LinearDimension#orientation` `OS3D` — Orientation: +DIMENSION_LINE_ALIGNED+, +DIMENSION_LINE_HORIZONTAL+, or +DIMENSION_LINE_VERTICAL+.
- `Layout::LinearDimension#orientation=` `OS3D` — Set the orientation, one step in the undo.
- `Layout::LinearDimension#precision` `OS3D` — Decimal places; -1 follows the model's setting.
- `Layout::LinearDimension#precision=` `OS3D` — Set the decimal precision, with one step in undo.
- `Layout::LinearDimension#chain_mode` `OS3D` — The group type: +:continuous+, +:baseline+, or nil if not grouped.
- `Layout::LinearDimension#chain_members` `OS3D` — All dimensions in the same group (including itself), in the order defined within the group; an empty array if not grouped or not added to the document.
- `Layout::LinearDimension::DIMENSION_LINE_ALIGNED` — The dimension line is parallel to the line connecting two points.
- `Layout::LinearDimension::DIMENSION_LINE_VERTICAL` — Vertical dimension.
- `Layout::LinearDimension::DIMENSION_LINE_HORIZONTAL` — Horizontal dimension.

## `Layout::LockedEntityError`

Raised when modifying a locked entity. ModraUp currently provides this class for compatibility with LayOut plugins. Object-level locking is unavailable.


## `Layout::LockedLayerError`

Throws when modifying an object on a locked layer or on a layer that is hidden in this page.


## `Layout::Page`

A drawing sheet. The paper size and margin settings are uniform across the entire document ({Layout::Document#page_info}), with the drawing frame derived from a template;

- `Layout::Page#name` — Page name.
- `Layout::Page#name=` — Rename, up to 200 characters, with one-step undo.
- `Layout::Page#entities` — The objects shown on this page, including those on shared layers, are displayed from bottom to top, following the stacking order in the interface; hidden layers are not included.
- `Layout::Page#nonshared_entities` — Objects on this page that are not part of shared layers.
- `Layout::Page#document` — The owning document.
- `Layout::Page#layer_visible?` — Does the layer appear on this page.
- `Layout::Page#set_layer_visibility` — Set the visibility of layers in the current page, with one-step undo.
- `Layout::Page#==` — Does the same page apply?
- `Layout::Page#eql?` — Like #==, used as a key in a Hash.
- `Layout::Page#hash` — Hash value consistent with {#eql?}.
- `Layout::Page#inspect` — A brief description.

## `Layout::PageInfo` · OS3D

Page size and margins in inches (written as +420.mm+). Paper size ranges from 100 to 1200 mm, and margins range from 0 to 40 mm.

- `Layout::PageInfo#width` — Page width.
- `Layout::PageInfo#width=` — Set the paper width, one step undo.
- `Layout::PageInfo#height` — Page height.
- `Layout::PageInfo#height=` — Set the page height, with one-step undo.
- `Layout::PageInfo#left_margin` `OS3D` — Default page margin (equal on all sides).
- `Layout::PageInfo#right_margin` `OS3D` — Default page margin (equal on all sides).
- `Layout::PageInfo#top_margin` `OS3D` — Default page margin (equal on all sides).
- `Layout::PageInfo#bottom_margin` `OS3D` — Default page margin (equal on all sides).
- `Layout::PageInfo#left_margin=` `OS3D` — Set the page margin, changing all four sides simultaneously, with one-step undo.
- `Layout::PageInfo#right_margin=` `OS3D` — Set the page margin, changing all four sides simultaneously.
- `Layout::PageInfo#top_margin=` `OS3D` — Set the page margin, changing all four sides simultaneously.
- `Layout::PageInfo#bottom_margin=` `OS3D` — Set the page margin, changing all four sides simultaneously.
- `Layout::PageInfo#inspect` — A brief description.

## `Layout::Pages`

A collection of drawing pages in the document, enumerated in drawing order.

- `Layout::Pages#length` — Pages.
- `Layout::Pages#size` — Alias for {#length}.
- `Layout::Pages#each` — Iterate through the pages in order.
- `Layout::Pages#[]` — Retrieve a page by its index or name.
- `Layout::Pages#index` — The position of the pages.
- `Layout::Pages#add` — Create a new page at the end, with one step of undo. The paper size, margins, and drawing sheet are inherited from the first page; if no pages exist, it takes the first page from the template, or uses the document's default paper size without a drawing sheet. Page numbers are automatically assigned as 1…N.
- `Layout::Pages#remove` — Remove the page, one step undo. It moves its shared layer objects to the remaining first page, consistent with the interface.
- `Layout::Pages#reorder` — Reorder pages to new positions and perform a single undo step.

## `Layout::PaperView` · OS3D

The paper view callback receives the +view+: it handles the conversion between paper pixels and paper coordinates (in inches), picks objects, and draws a preview in +draw(view)+. The drawing coordinates are in paper inches (e.g., +20.mm+), with line widths, point sizes, and font sizes in pixels. The drawing methods only take effect within +draw(view)+; otherwise, calling them has no effect.

- `Layout::PaperView#paper_point` — The pixel coordinates on the paper plane in inches, with the origin at the top-left corner of the paper, and +y+ directed downward. When +snap+ is true, it snaps to the endpoints, midpoints, intersections, centers, edge points of paper objects, and visible model lines within visible viewports (model lines in viewports must be generated in the background before snapping).
- `Layout::PaperView#paper_to_screen` — The pixel coordinates corresponding to the paper area on the paper view.
- `Layout::PaperView#pick_entity` — The editable PaperView object at the top layer in pixel coordinates (following the selection tool's point selection rules); objects on locked or hidden layers are not considered.
- `Layout::PaperView#zoom` — Current Paper View Zoom: pixels per inch on the paper.
- `Layout::PaperView#pixels_to_paper` — The pixel length corresponding to the paper length.
- `Layout::PaperView#invalidate` — Request redrawing the tool preview (call +draw(view)+ later).
- `Layout::PaperView#document` — The document containing the tools.
- `Layout::PaperView#drawing_color=` — The color used for drawing after this.
- `Layout::PaperView#line_width=` — The line width (pixels, unchanged with scaling) used for drawing.
- `Layout::PaperView#line_stipple=` — Sets the line pattern for subsequent drawing. Accepts the same values as {ModraUp::View#line_stipple=}, including +""+ for solid lines, +"."+, +"-"+, +"_"+, and +"-.-"+.
- `Layout::PaperView#draw` — Draw using OpenGL methods: +GL_POINTS+, +GL_LINES+, +GL_LINE_STRIP+, +GL_LINE_LOOP+, +GL_TRIANGLES+, +GL_TRIANGLE_STRIP+, +GL_TRIANGLE_FAN+, +GL_QUADS+, +GL_QUAD_STRIP+, +GL_POLYGON+. Points are in paper inches as {Geom::Point2d} or +[x, y]+.
- `Layout::PaperView#draw_line` — Draw a line segment between every two points (+GL_LINES+).
- `Layout::PaperView#draw_polyline` — Connect the points in sequence with a polyline (+GL_LINE_STRIP+).
- `Layout::PaperView#draw_points` — Draw point markers, +size+ in pixels, and +style+ as in {ModraUp::View#draw_points} (1 hollow square, 2 solid square, 3 plus, 4 times, 5 star, 6 hollow triangle, 7 solid triangle).
- `Layout::PaperView#draw_text` — Write screen text at a paper view point. +options+: +size+ (pixels, default 12), +bold+, +align+ (TextAlignLeft / TextAlignCenter / TextAlignRight), +color+.

## `Layout::Path` · `< Layout::Entity`

Sheet Path: Lines, polygons, Bézier curves, or arcs. Coordinates are sheet inches, with y downward.

- `Layout::Path.new_arc` — Arc. Angle in radians, from the +x axis towards the +y axis (down towards the paper).
- `Layout::Path#initialize` — A straight line between two points.
- `Layout::Path#append_point` — Append a straight line segment or cubic Bézier segment to the end. Arcs and ellipses cannot have points added.
- `Layout::Path#close` — Close the path (return to the starting point).
- `Layout::Path#closed?` — Returns whether it is closed.
- `Layout::Path#points` — Control points, in paper inches (unrotated). For arcs and ellipses, these are the center point and two radius endpoints.
- `Layout::Path#start_point` — Start point.
- `Layout::Path#end_point` — End point; for a closed polygon, this is the starting point.

## `Layout::RadialDimension` · OS3D · `< Layout::Entity`

Radial dimensions for arcs or circles: The dimension line passes through the center of the circle or arc and points to the text, with a prefix of +R+ for radius or +Ø+ for diameter.

- `Layout::RadialDimension#initialize` — Create a radial (or diameter) dimension. The radius is the distance from the +circle_point+ to the center; the dimension line points towards the +text_point+ (defaults to +circle_point+), with the number placed at +text_point+ not overlapping the arrow.
- `Layout::RadialDimension#center_point` — Center.
- `Layout::RadialDimension#circle_point` — The intersection point of the dimension line with the circle (at the arrow).
- `Layout::RadialDimension#text_point` — Position of the text point.
- `Layout::RadialDimension#text_point=` — Move the digit one step at a time; the dimension line rotates around the center while the radius remains unchanged (similar to dragging within the interface).
- `Layout::RadialDimension#radius` — Radial dimension on the plane (independent of {#diameter?}).
- `Layout::RadialDimension#diameter?` — Indicates whether the dimension is a diameter.
- `Layout::RadialDimension#diameter=` — Switch between radius and diameter in one step. Undo the change.
- `Layout::RadialDimension#text` — Display the copied text (e.g., +R25+).
- `Layout::RadialDimension#text=` — Customize the text, +<>+ represents prefixed numerical values, and perform one step of undo.
- `Layout::RadialDimension#custom_text?` — Whether to use custom text.
- `Layout::RadialDimension#custom_text=` — Set false to restore the display of the measurement value.
- `Layout::RadialDimension#scale` — Scale factor (ratio), same as {Layout::LinearDimension#scale}.
- `Layout::RadialDimension#scale=` — Set the scale factor for the radial dimension, and perform an undo step.
- `Layout::RadialDimension#precision` — Decimal places; -1 follows the model's setting.
- `Layout::RadialDimension#precision=` — Set the decimal precision, with one step in undo.

## `Layout::Rectangle` · OS3D · `< Layout::Path`

Rectangle (closed path).

- `Layout::Rectangle#initialize` `OS3D` — Create a Rectangle by Corner Points.

## `Layout::SketchUpModel` · OS3D · `< Layout::Entity`

Model Viewport: Displays a scene, or a single component or group (independent viewport). Parallel projection viewports have a fixed scale and can project model points, associated dimensions, sections, and details. When the drawing workspace is open, new and modified viewports are automatically plotted in the background.

- `Layout::SketchUpModel#initialize` `OS3D` — Create a viewport and then add it to the drawing sheet using {Layout::Document#add_entity}. The scene viewport displays the scene's camera, style, and hidden elements. An instance viewport (independent viewport) only shows the component or group instance, defaulting to a top view with parallel projection, and uses integer scaling ratios. Nested instances are specified with +ModraUp::InstancePath+.
- `Layout::SketchUpModel#scale` — The scale is a ratio (e.g., 1:50 corresponds to 0.02). The instance viewport in the layout has not been documented and is nil if the scale is not applied (the scale is calculated based on size when applied).
- `Layout::SketchUpModel#scale=` — Set the scale, one step undo. The camera height for parallel projection is derived from "viewport height × scale denominator".
- `Layout::SketchUpModel#render_mode` — Render mode: {VECTOR_RENDER}, {HYBRID_RENDER}, or {RASTER_RENDER}.
- `Layout::SketchUpModel#render_mode=` — Set the rendering mode, with one-step undo. Wireframe is black and white; switch to colored background when mixed in black and white.
- `Layout::SketchUpModel#view` — Standard views (e.g., +TOP_VIEW+)；custom camera as {CUSTOM_VIEW}.
- `Layout::SketchUpModel#view=` — Switch to the standard view, undo one step. The scale remains unchanged in parallel projection.
- `Layout::SketchUpModel#perspective?` — Returns whether the projection is perspective.
- `Layout::SketchUpModel#perspective=` — Switch between perspective or parallel projection, with one step undo. When switching to parallel projection, the ratio is calculated based on the current viewport.
- `Layout::SketchUpModel#line_weight` — Model line weight in points; 0 for automatic.
- `Layout::SketchUpModel#line_weight=` — Sets the model line weight, undoable in one step.
- `Layout::SketchUpModel#scenes` `OS3D` — The model's scene names, in the order of {ModraUp::Pages}.
- `Layout::SketchUpModel#current_scene` `OS3D` — The index of the displayed scene in {#scenes}; nil if the instance viewport or scene has been deleted.
- `Layout::SketchUpModel#current_scene=` — Change to display another scene, undo one step; camera returns to the camera of that scene.
- `Layout::SketchUpModel#camera_modified?` — The camera is different from the scene (true after the standard view, navigation, or {#camera=}; instance viewports always return true).
- `Layout::SketchUpModel#reset_camera` — Reset the camera to the scene's initial view, one step undo.
- `Layout::SketchUpModel#preserve_scale_on_resize?` — Does the viewport maintain scale when its size is changed (default is true).
- `Layout::SketchUpModel#preserve_scale_on_resize=` — Sets whether to preserve scale on resizing, with one step for undo.
- `Layout::SketchUpModel#render_needed?` — Does the preview need to be updated (not the latest, not generated, model has changed, or updating)? The drawing workspace updates in the background automatically when open.
- `Layout::SketchUpModel#render` `OS3D` — Does not support synchronous rendering: rendering occurs in a separate process, and the results are returned via the interface event loop.
- `Layout::SketchUpModel#model_to_paper_point` — The position of a model point on the paper in inches, including viewport translation, rotation, and scale.
- `Layout::SketchUpModel#paper_to_model_point` `OS3D` — The paper point corresponding to the model point, lying on the plane that passes through the camera's target and is perpendicular to the camera's view.
- `Layout::SketchUpModel#camera` `OS3D` — The camera copy actually used by the viewport (scene camera or custom camera).
- `Layout::SketchUpModel#camera=` `OS3D` — Set custom camera, with one-step undo. For parallel projection, the scale is inferred from the camera height.
- `Layout::SketchUpModel#source` `OS3D` — The source of the viewport: the scene, or the instance path of an independent viewport; it becomes nil when the source is deleted.
- `Layout::SketchUpModel#color_mode` `OS3D` — Color: +black_and_white+, +color+, or +grayscale+.
- `Layout::SketchUpModel#color_mode=` `OS3D` — Set the color mode, undoing any changes. After selecting color or grayscale in the sketch viewport, the model switches to mixed representation.
- `Layout::SketchUpModel#pan` `OS3D` — Pan the viewport by [x, y] (in paper inches).
- `Layout::SketchUpModel#pan=` `OS3D` — Set the viewport pan, one step in the undo.
- `Layout::SketchUpModel#create_section` `OS3D` — Generate a section view from the current viewport, with one undo step, resulting in the same outcome as the section tool: a new viewport with section numbers, and the original viewport with a section cut symbol. The points +first+ and +second+ are the model points at the ends of the section line, which should project as a line in the current viewport (at least 0.1 mm long); the section plane contains this line and the viewing direction of the current viewport. The +look+ parameter specifies the viewing direction of the section, pointing to the retained side.
- `Layout::SketchUpModel#create_detail` `OS3D` — Generate a detail drawing from this viewport, with one undo step, similar to the detail tool: create a region bounded by two model points in the current viewport and scale it to a larger proportion at +position+, adding the detail frame to the current viewport.
- `Layout::SketchUpModel#section_marks` `OS3D` — Section marks in the current viewport: each +{first:, second:, normal:, target:}+, where +target+ is the section plane (set to nil if removed).
- `Layout::SketchUpModel#visible_lines` `OS3D` — Hidden visible edges in the sketch plane, in inches, used for outlining, generating continuous dimensions, etc. Prioritizes reusing exported and snap-captured vector caches;
- `Layout::SketchUpModel::RASTER_RENDER` — Render Style: Bitmap.
- `Layout::SketchUpModel::HYBRID_RENDER` — Render Mode: Hybrid (vector lines on a colored background).
- `Layout::SketchUpModel::VECTOR_RENDER` — Render Style: Line Drawing (Black and White Vector).
- `Layout::SketchUpModel::CUSTOM_VIEW` — Custom camera (not a standard view).
- `Layout::SketchUpModel::TOP_VIEW` — Standard View: Top View.
- `Layout::SketchUpModel::TOP_RELATIVE_VIEW` `OS3D` — The relative top view in LayOut.
- `Layout::SketchUpModel::BOTTOM_VIEW` — Standard View: Bottom View.
- `Layout::SketchUpModel::BOTTOM_RELATIVE_VIEW` `OS3D` — The LayOut relative bottom view.
- `Layout::SketchUpModel::FRONT_VIEW` — Standard View: Front View.
- `Layout::SketchUpModel::BACK_VIEW` — Standard View: Back View.
- `Layout::SketchUpModel::LEFT_VIEW` — Standard View: Left View.
- `Layout::SketchUpModel::RIGHT_VIEW` — Standard View: Right View.
- `Layout::SketchUpModel::ISO_VIEW` — Standard View: Isometric.

## `Layout::Style` · OS3D

Graphical and text styles (value objects). {Layout::Entity#style} returns a copy; changes must be assigned back using {Layout::Entity#style=} for them to take effect, similar to LayOut. Only properties relevant to the object type will be applied.

- `Layout::Style#initialize` — Empty Style: Unset properties read their default values, and when applied to an object, only set properties are applied.
- `Layout::Style#initialize_copy` — Copy the style.
- `Layout::Style#stroked` — Returns whether the outline is drawn.
- `Layout::Style#stroked=` — Set whether to stroke.
- `Layout::Style#stroke_color` — Stroke color (for lines and text color).
- `Layout::Style#stroke_color=` — Sets the line color.
- `Layout::Style#stroke_width` — Line width in points.
- `Layout::Style#stroke_width=` — Set the line width in pounds (path as 0.05～5 mm, dimensions and leaders as 0.02～5 mm).
- `Layout::Style#stroke_pattern` — Line patterns, +STROKE_PATTERN_*+.
- `Layout::Style#stroke_pattern=` — Set the line pattern.
- `Layout::Style#stroke_pattern_scale` — Line type scale.
- `Layout::Style#stroke_pattern_scale=` — Set the line pattern scale.
- `Layout::Style#stroke_join_style` — Line segment connection style, +JOIN_STYLE_*+.
- `Layout::Style#stroke_join_style=` — Set the connection style.
- `Layout::Style#stroke_cap_style` — Endpoint style, +CAP_STYLE_*+.
- `Layout::Style#stroke_cap_style=` — Set the endpoint style.
- `Layout::Style#solid_filled` — Whether to use solid color filling.
- `Layout::Style#solid_filled=` — Set solid color filling.
- `Layout::Style#fill_color` — Fill color.
- `Layout::Style#fill_color=` — Sets the fill color.
- `Layout::Style#pattern_filled` — Does the pattern fill exist?
- `Layout::Style#pattern_filled=` `OS3D` — Enable or disable pattern filling; when enabled, use diagonal lines if no pattern is selected.
- `Layout::Style#fill_pattern` `OS3D` — Built-in fill patterns: +:none+, +:horizontal+, +:vertical+, +:diagonal+, +:back_diagonal+, +:crosshatch+, +:dots+.
- `Layout::Style#fill_pattern=` `OS3D` — Select a built-in fill pattern with 3 mm spacing on the sheet.
- `Layout::Style#pattern_fill_path` `OS3D` — Does not support: OpenSu has no image fill.
- `Layout::Style#pattern_fill_path=` `OS3D` — Does not support: OpenSu has no image fill.
- `Layout::Style#start_arrow_type` — Start arrow, +ARROW_*+.
- `Layout::Style#start_arrow_type=` — Sets the start arrow. Only applicable to open paths, leaders, and dimensions.
- `Layout::Style#end_arrow_type` — End arrow, +ARROW_*+.
- `Layout::Style#end_arrow_type=` `OS3D` — Set the end arrow type.
- `Layout::Style#start_arrow_size` — Start arrow size in points.
- `Layout::Style#start_arrow_size=` — Set the size of the start arrow.
- `Layout::Style#end_arrow_size` — The size of the end arrow, in points.
- `Layout::Style#end_arrow_size=` — Set the size of the end arrow.
- `Layout::Style#font_family` — Font family; an empty string if unknown.
- `Layout::Style#font_family=` — Set the font family. An +ArgumentError+ is raised if the font is not installed.
- `Layout::Style#font_size` — Font size, points (point size = font_size × 0.353 mm).
- `Layout::Style#font_size=` — Set the font size in points. The height of the text characters is limited to 1～30 mm, with dimensions and notes ranging from 0.5～30 mm.
- `Layout::Style#text_color` — Text color.
- `Layout::Style#text_color=` — Set the text color.
- `Layout::Style#text_bold` — Is bold.
- `Layout::Style#text_bold=` — Set text to bold (effective only for text).
- `Layout::Style#text_italic` — Whether the text is italic.
- `Layout::Style#text_italic=` — Set text in italic (effective only for text).
- `Layout::Style#text_alignment` — Paragraph alignment, +ALIGN_*+.
- `Layout::Style#text_alignment=` — Set paragraph alignment (only effective for text).
- `Layout::Style::JOIN_STYLE_MITER` — Miter join.
- `Layout::Style::JOIN_STYLE_ROUND` — Round corner connection.
- `Layout::Style::JOIN_STYLE_BEVEL` — Bevel join (default).
- `Layout::Style::CAP_STYLE_FLAT` — Flat endpoints (default).
- `Layout::Style::CAP_STYLE_ROUND` — Round cap endpoint.
- `Layout::Style::CAP_STYLE_SQUARE` — Square cap endpoints.
- `Layout::Style::STROKE_PATTERN_SOLID` — Line type: Solid.
- `Layout::Style::STROKE_PATTERN_DASH` — Line type: Dashed.
- `Layout::Style::STROKE_PATTERN_DOT` — Line Type: Dot Dash.
- `Layout::Style::STROKE_PATTERN_DASH_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_DOT_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_SPACE` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_DOT_DOT_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_DASH_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_DASH_DOT_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_DASH_DASH_DOT_DOT_DOT` `OS3D` — Line type constant (LayOut name).
- `Layout::Style::STROKE_PATTERN_CENTER` — Line Type: Center Dash Dot
- `Layout::Style::STROKE_PATTERN_PHANTOM` — Stroke pattern: Dotted and dashed.
- `Layout::Style::STROKE_PATTERN_SHORT_DASH` — Line type: Short dash.
- `Layout::Style::ARROW_NONE` — Arrows: None.
- `Layout::Style::ARROW_FILLED_TRIANGLE` — Arrow: Filled Triangle.
- `Layout::Style::ARROW_OPEN_TRIANGLE` — Arrow: Hollow Triangle.
- `Layout::Style::ARROW_FILLED_SKINNY_TRIANGLE` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_OPEN_SKINNY_TRIANGLE` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_OPEN_ARROW_90` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_OPEN_ARROW_120` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_FILLED_CIRCLE` — Arrow: Filled Circle.
- `Layout::Style::ARROW_OPEN_CIRCLE` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_FILLED_SQUARE` — Arrow: Filled Square.
- `Layout::Style::ARROW_OPEN_SQUARE` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_FILLED_DIAMOND` — Arrow: Filled Diamond.
- `Layout::Style::ARROW_OPEN_DIAMOND` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_STAR` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_T` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_SLASH_RIGHT` — Arrow: Slash (architectural dimension leader).
- `Layout::Style::ARROW_SLASH_LEFT` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_UNDERRUN` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ARROW_OVERRUN` `OS3D` — Arrow constant (LayOut name).
- `Layout::Style::ALIGN_LEFT` — Align text to the left.
- `Layout::Style::ALIGN_RIGHT` — Align text to the right.
- `Layout::Style::ALIGN_CENTER` — Center the text.

## `Layout::TitleBlock` · OS3D

Title block shared fields, similar to a Hash. Fields: project (project name), company (design unit), designer (design), checker (review), approver (approval), date (date). Each item should not exceed 200 characters.

- `Layout::TitleBlock#[]` `OS3D` — Read a field, which is an empty string if not filled.
- `Layout::TitleBlock#[]=` `OS3D` — Write a field with one step undo; an empty string or nil clears the field.
- `Layout::TitleBlock#keys` `OS3D` — All field names.
- `Layout::TitleBlock#to_h` `OS3D` — A copy of all fields.

## `Layout::VisibleLine` · OS3D

{Layout::SketchUpModel#visible_lines} returns a visible line segment.

- `Layout::VisibleLine#start` `OS3D` — Start point, in paper inches.
- `Layout::VisibleLine#end` `OS3D` — End point, paper inches.
- `Layout::VisibleLine#kind` `OS3D` — +:model+, +:section+, or +:dimension+.
- `Layout::VisibleLine#width` `OS3D` — Line width in points.

## `Length` · `< Numeric`

A length stored in inches. In the API since 2015, Length is separate from Float. ModraUp derives Length from Numeric. Equality, ordering, and +<=>+ use a tolerance of 0.001 inches. Arithmetic operates on inches and returns an ordinary number, usually a Float. Call +to_l+ to convert the result back to a Length. +inspect+ displays inches. +to_s+ uses the current model's display units.

- `Length#initialize` — Construct in inches. Plugins typically write +12.to_l+ or +25.4.mm+.
- `Length#to_f` — Convert to inches as a Float.
- `Length#to_s` — Format the length according to the current model's units and precision.
- `Length#inspect` — An unformatted inch string, unrelated to the model's display units.
- `Length#<=>` — Three-way comparison with length tolerance. Differences not exceeding 0.001 inches are considered equal.
- `Length#==` — Equal with length tolerance. +1.inch == 1+ is true (bare numbers are in inches).
- `Length#hash`
- `Length#<` — Length tolerance: Less than and differing by more than 0.001 inches.
- `Length#<=` — Length tolerance: Less than, or within 0.001 inches.
- `Length#>` — Length tolerance: greater than and differing by more than 0.001 inches.
- `Length#>=` — Length tolerance: Greater than, or within 0.001 inches.
- `Length#+` — Add, the naked number in inches, and the result is a regular numerical value.
- `Length#-` — Subtract, the bare number in inches results in a regular numerical value.
- `Length#*` — Multiply by Ruby Length in inches, resulting in a plain numerical value.
- `Length#/` — Divide by inches; like Float, division by zero produces Infinity or NaN.
- `Length#**` — Raise to a power in inches, following the semantics of Float; negative non-integer powers can return Complex.
- `Length#%` — Returns the remainder with the same sign as the divisor, following Float modulo rules.
- `Length#modulo` — Works the same as %, taking the modulus according to Float rules.
- `Length#remainder` — Returns the remainder according to Float rules, with the result having the same sign as the dividend.
- `Length#div` — Divides by a Float according to floating-point division rules and returns the floor of the quotient.
- `Length#divmod` — Returns the integer division quotient and remainder according to Float rules.
- `Length#fdiv` — Divides by the Float according to Float rules.
- `Length#quo` — Divides by the Float according to Float rules.
- `Length#-@` — Negate, return inches as a Float.
- `Length#+@` — Returns the length in inches as a Float.
- `Length#abs` — Returns the absolute value as a Float in inches.
- `Length#magnitude` — Returns an Inch Float magnitude, similar to abs.
- `Length#to_i` — Truncate to the nearest integer in inches.
- `Length#to_int` — Returns the integer value of the length, equivalent to using to_i.
- `Length#to_r` — Returns a precise rational number representation of the length in inches.
- `Length#finite?` — Query if the inch numerical value is finite.
- `Length#infinite?` — Returns 1 for positive infinity, -1 for negative infinity, and nil otherwise.
- `Length#nan?` — Query if the inch numerical value is NaN.
- `Length#round` — Round to the nearest integer according to Float rounding rules, supporting the half: keyword.
- `Length#floor` — Round down to the nearest integer as per Float rules.
- `Length#ceil` — Ceils to the nearest integer as per Float rules.
- `Length#truncate` — Truncates to zero following Float rules.
- `Length#coerce` — Coerce the operand to a Float according to Float rules, ensuring that the numeric value on the left side of the operation returns a regular number.
- `Length::Decimal` — Decimal = 0
- `Length::Architectural` — Architectural = 1
- `Length::Engineering` — Engineering = 2
- `Length::Fractional` — Fractional = 3
- `Length::Inches` — Inches = 0
- `Length::Feet` — Feet = 1
- `Length::Millimeter` — Millimeter = 2
- `Length::Centimeter` — Centimeter = 3
- `Length::Meter` — Meter = 4
- `Length::Yard` — Yard = 5
- `Length::SquareInches` — SquareInches = 0
- `Length::SquareFeet` — SquareFeet = 1
- `Length::SquareMillimeter` — SquareMillimeter = 2
- `Length::SquareCentimeter` — SquareCentimeter = 3
- `Length::SquareMeter` — SquareMeter = 4
- `Length::SquareYard` — SquareYard = 5
- `Length::CubicInches` — CubicInches = 0
- `Length::CubicFeet` — CubicFeet = 1
- `Length::CubicMillimeter` — CubicMillimeter = 2
- `Length::CubicCentimeter` — CubicCentimeter = 3
- `Length::CubicMeter` — CubicMeter = 4
- `Length::CubicYard` — CubicYard = 5
- `Length::Liter` — Liter = 6
- `Length::USGallon` — USGallon = 7

## `ModraUp` · OS3D

Application entry points for accessing the active model, reading version information, registering extensions, opening files, and formatting units. This namespace follows the SketchUp Ruby API naming conventions.

- `ModraUp.register_procedure` — Register a procedure in the current session. Registering the same instance or the same ID again returns `false`. Only the procedure's ID and parameters are stored in the model. When the file is opened, the procedure must be registered; otherwise, `get_procedure_parameters` returns an empty value and `run_procedures` does not run, preserving any existing output geometry.
- `ModraUp.active_model` — The currently open model (the host contains only this instance).
- `ModraUp.version` — Declared SketchUp compatible version string (currently fixed to +"24.0.0"+).
- `ModraUp.version_number` — Version number (current +2400000000).
- `ModraUp.app_name` — Application Name, currently set to +`ModraUp`+.
- `ModraUp.platform` — Current operating system. macOS is denoted as +:platform_osx+, and Windows as +:platform_win+.
- `ModraUp.register_extension` — Register the {SketchupExtension}. When +load_at_start+ is true, its load path (specified by the second parameter +@path+ of {SketchupExtension.new}) is immediately +require"d.
- `ModraUp.require` — Loads Ruby files, supporting both +.rbe+ (RBS2.0) and old +.rbs+ (RBS1.0) formats. Returns +false+ if the file is not found or a +LoadError+ occurs; the old error strategy of the host application is maintained.
- `ModraUp.load` — Load Ruby files. Currently, behaves the same as {ModraUp.require}: the file will not be executed more than once; and it returns +false+ if the file is not found.
- `ModraUp.is_pro?` `OS3D` — Is Pro functionality enabled. Currently always true; otherwise, the DC Manager/Report functions will be disabled.
- `ModraUp.is_online` `OS3D` — Do you consider there to be an online connection? Currently, it is always set to false, with DC reports using local HTML.
- `ModraUp.get_datfile_info` `OS3D` — Read keys from the SketchUp installation dat file. Return the default value if no dat file is found.
- `ModraUp.get_i18n_datfile_info` `OS3D` — Read the interface language dat file. Like {ModraUp.get_datfile_info}, it returns +default+ when no table is found.
- `ModraUp.temp_dir` — Temporary directory (system temporary path).
- `ModraUp.get_locale` — The current application language; uses the system language if no fixed language is set, following SketchUp style tags such as +"zh-CN"+, +"en-US"+.
- `ModraUp.os_language` — System preferred language, unaffected by the application language setting.
- `ModraUp.is_64bit?` — Is the process 64-bit.
- `ModraUp.mdi?` `OS3D` — Is the multi-document interface. This host is single-document and always returns `false`.
- `ModraUp.debug_mode?` — Outputs API misuse warnings to the console. Currently, only the switch is saved; individual messages are not printed yet.
- `ModraUp.debug_mode=` — Sets the value reported by {ModraUp.debug_mode?}.
- `ModraUp.plugins_disabled?` — Does the plugin skip the Plugins directory's +.rb+ files on startup? This setting is defined in the {ModraUp.write_default} preference file and will take effect on the next startup.
- `ModraUp.plugins_disabled=` — Sets the flag returned by {ModraUp.plugins_disabled?}. Pass +true+ to disable the plugins directory.
- `ModraUp.is_valid_filename?` — Does the filename contain no path separators or Windows illegal characters.
- `ModraUp.get_shortcuts` — Returns all shortcuts configured by the host, including user rebindings, multiple bindings for the same command, and plugin commands.
- `ModraUp.get_resource_path` — Find application resource files (LanguageHandler uses). In +$LOAD_PATH+, look for +Resources/en-US/filename+, then find the same-named file. If not found, return +nil+.
- `ModraUp.format_length` — Format the length according to the current model units (internal inches). The second parameter covers decimal places; a negative value will remove trailing zeros.
- `ModraUp.format_angle` `OS3D` — Format the angle in radians into a degree format used by the current model. Currently, it outputs in degrees with a decimal point, e.g., +.+.
- `ModraUp.format_degrees` — Format a number that is already in degrees into an angle text (currently +"%.1f"+).
- `ModraUp.format_area` — Format the area according to the current model units. The parameter is in square inches.
- `ModraUp.parse_length` — Parse the length text into inches. Return +nil+ if parsing fails.
- `ModraUp.format_volume` — Format the volume using the current model's length unit. The parameter is in cubic inches.
- `ModraUp.break_edges?` — Does the line snap to intersect coplanar edges at the intersection point when breaking them? Defaults to +true+. The line tool reads this switch from the core +imprint_coplanar_line+.
- `ModraUp.break_edges=` — Set {ModraUp.break_edges?} to false to keep intersecting edges intact.
- `ModraUp.create_texture_writer` — Create a texture writer.
- `ModraUp.add_observer` — Register application-level observers. Adding the same object a second time returns false.
- `ModraUp.remove_observer` — Remove application-level observers. Returns +false+ if not registered.
- `ModraUp.read_default` — Read the persisted preferences and return the type written at the time (see {ModraUp.write_default}); if not written, return +default+.
- `ModraUp.write_default` — Persist preferences: save values by type, readable during the current session and written to disk on exit.
- `ModraUp.status_text=` — Displays a prompt in the status bar on the left. Equivalent to {ModraUp.set_status_text}(text, SB_PROMPT). Ignored if there is no host.
- `ModraUp.vcb_label=` — VCB Label. Equivalent to {ModraUp.set_status_text}(label_text, SB_VCB_LABEL).
- `ModraUp.vcb_value=` — VCB value. Equivalent to {ModraUp.set_status_text}(value, SB_VCB_VALUE).
- `ModraUp.set_status_text` — Set the status bar. Clear the left prompt, VCB label, and VCB value.
- `ModraUp.undo` — Undo the previous operation on the current model.
- `ModraUp.redo` — Redoes the current model by executing the next step in the undo stack.
- `ModraUp.file_new` — Create a new document. When hosted, it follows the path of the "File / New" menu: if the document is dirty, ask to save first, then display the template dialog. If the user cancels saving or selects a template, the document remains unchanged. When not hosted, reset to the default millimeter template (1 m cube).
- `ModraUp.open_file` — Open a +.osk3d+ or +.skp+ file, or pass it to the importer registered by {ModraUp.register_importer}. Replace the current model. If the file does not exist, return +false+. For dirty documents, prompt the host to save; if the user cancels, return +false+. If +with_status+ is true, return {ModraUp::Model::LOAD_STATUS_SUCCESS} (importers return their {ModraUp::Importer::ImportSuccess} status, etc.). Ignore +show_version_warning_dialog+.
- `ModraUp.quit` — Exit the application. Follow the path of closing the window when there is a host (prompt to save dirty documents). Do nothing if there is no host.
- `ModraUp.focus` — Brings the main window to the foreground. Does nothing if there is no host.
- `ModraUp.resize_viewport` `OS3D` — Resize the 3D viewport dimensions. After adjustment, {ModraUp::View#vpwidth} / {ModraUp::View#vpheight} aligns correctly.
- `ModraUp.template` — The current template file path. It is an empty string if there is no host and no template is set.
- `ModraUp.template=` — Set the path for the template to be used next time a new model is created. Write the setting when there is a host.
- `ModraUp.template_dir` — Template directory. When hosted, it is located at +Templates+ under the application data directory.
- `ModraUp.fix_shadow_strings?` — Enhance face offsetting to reduce shadow stripe artifacts. Only affects polygon offsetting when there is no true shadow channel.
- `ModraUp.fix_shadow_strings=` — Toggle Shadow Stripes Correction.
- `ModraUp.install_from_archive` `OS3D` — Unzip the archive (either .rbz or .zip) to the Plugins directory and save the installation record. On restart, load the top-level entry. A default warning for third-party extensions will pop up; if the user cancels, throw {Interrupt}. If there is no host, return false.
- `ModraUp.register_importer` — Register the {ModraUp::Importer}. Afterward, the "Open / Import" dialog will display its file filter, and {ModraUp.open_file} will call the +load_file+ method when it corresponds to the extension.
- `ModraUp.send_action` — Trigger an action. The string can include or exclude a trailing colon. Recognized actions: +showRubyPanel:+ (host console), standard views / zoom / perspective, built-in tools, +editUndo:+ / +editRedo:+,
- `ModraUp.display_name_from_action` — Replace the {ModraUp.send_action} string with a short name. Remove the trailing colon from unknown names and return them unchanged.
- `ModraUp.find_support_file` — Find support files. When querying +"Plugins"+, omitting the directory or passing an empty string returns the user plugin directory. For other two-parameter calls, search for +directory/name+ in the plugin directory (prefix can be removed) and +$LOAD_PATH+.
- `ModraUp.find_support_files` — Lists files with matching extensions in the support directory. Omitting +directory+ returns an empty array.
- `ModraUp.extensions` — Entries in the extensions table registered with {ModraUp.register_extension}.
- `ModraUp::PROCEDURE_ID_FOLLOW_ME` — The native process Follow Me's id (in the string form of +ComponentDefinition#attach_procedure+).
- `ModraUp::PROCEDURE_ID_SOLID_TOOLS` — The native procedure ID for solid tools (union, difference, intersection).
- `ModraUp::PROCEDURE_ID_COPY_ALONG` — The native process ID for "Copy Along" in Ruby SketchUp.
- `ModraUp::SnapTo_Arbitrary` — SnapTo_Arbitrary = 0
- `ModraUp::SnapTo_Horizontal` — SnapTo_Horizontal = 1
- `ModraUp::SnapTo_Vertical` — SnapTo_Vertical = 2
- `ModraUp::SnapTo_Sloped` — SnapTo_Sloped = 3
- `ModraUp::VERSION` `OS3D` — The application version string.

## `ModraUp::AppObserver`

Observer for applications. Registered with {ModraUp.add_observer}. Must implement +expectsStartupModelNotifications+ and return +true+ to receive the +onNewModel+ notification at startup.

- `ModraUp::AppObserver#expectsStartupModelNotifications` — Returns whether to receive notifications for the startup model via +onNewModel+ / +onOpenModel+. The default base class returns +false+.
- `ModraUp::AppObserver#onNewModel` — Called after a new document is created.
- `ModraUp::AppObserver#onOpenModel` — Called after opening a document.
- `ModraUp::AppObserver#onActivateModel` — Called when the current model is activated. Note that no dispatching occurs (single document, no Mac multi-document switching).
- `ModraUp::AppObserver#onQuit` — Called before the application exits.
- `ModraUp::AppObserver#onUnloadExtension` — Called when the extension is disabled.
- `ModraUp::AppObserver#onExtensionsLoaded` — Called after the plugin directory has been loaded.

## `ModraUp::ArcCurve` · OS3D · `< ModraUp::Curve`

Arcs or arcs (pline edge chain). Obtain using {ModraUp::Edge#curve}. The parent class is {ModraUp::Curve}.

- `ModraUp::ArcCurve#plane` — The four coefficients [A, B, C, D] of the plane containing the arc.
- `ModraUp::ArcCurve#num_segments` `OS3D` — Number of Segments (for arcs and circles in the entity).
- `ModraUp::ArcCurve#num_segments=` `OS3D` — Modify the number of segments while keeping the center/radius/angle. Use the {ModraUp::Model} transaction operator.
- `ModraUp::ArcCurve#center` — Center.
- `ModraUp::ArcCurve#radius` — Radius (in inches).
- `ModraUp::ArcCurve#circular?` — Returns whether the arc curve is a closed circle.
- `ModraUp::ArcCurve#start_angle` — Start angle (radians).
- `ModraUp::ArcCurve#end_angle` — Terminates angle (radians).
- `ModraUp::ArcCurve#normal` — Arc plane normal.
- `ModraUp::ArcCurve#xaxis` — Arc coordinate system X-axis. Length equals the radius.
- `ModraUp::ArcCurve#yaxis` — Arc coordinate system Y-axis. Length equals the radius.

## `ModraUp::AttributeDictionaries` · `< ModraUp::Entity`

A collection of dictionaries on entities. An empty set is represented as `nil` in Ruby and will not be obtained from this object.

- `ModraUp::AttributeDictionaries#each` — Iterate through the {ModraUp::AttributeDictionary}.
- `ModraUp::AttributeDictionaries#[]` — Retrieve the dictionary by name.
- `ModraUp::AttributeDictionaries#[]=` — Replace the dictionary for this name with a Hash containing the entire set of attributes.

## `ModraUp::AttributeDictionary` · OS3D · `< ModraUp::Entity`

A set of key-value pairs. Values are written with their Ruby type preserved. The Hash must be converted to a string using +JSON.generate+ in Ruby before writing. DC data is typically found under +"dynamic_attributes"+.

- `ModraUp::AttributeDictionary#name` — Dictionary name.
- `ModraUp::AttributeDictionary#each` — Iterate through keys and values. Value types are the same as when written.
- `ModraUp::AttributeDictionary#each_pair` — An alias for +each+.
- `ModraUp::AttributeDictionary#attribute_dictionaries` `OS3D` — A collection of nested dictionaries. It is +nil+ when there are no nested dictionaries. Nested dictionaries are currently not persistent.
- `ModraUp::AttributeDictionary#[]` — Retrieve the value by key. The type will be the same as when it was written.
- `ModraUp::AttributeDictionary#[]=` — Write the key-value pair. The type written will be the type read back.
- `ModraUp::AttributeDictionary#keys` — All keys.

## `ModraUp::Axes` · `< ModraUp::Entity`

Read-only view of the current drawing axes, following the model's editing context.

- `ModraUp::Axes#transformation` — Transformation from drawing axes to world coordinates, with the direction vector being a unit length.
- `ModraUp::Axes#origin` — The origin of the current drawing coordinate axis.
- `ModraUp::Axes#xaxis` — The unit direction vector of the x-axis.
- `ModraUp::Axes#yaxis` — The unit direction vector of the y-axis.
- `ModraUp::Axes#zaxis` — The unit direction vector of the z-axis.
- `ModraUp::Axes#axes` — Returns the red, green, and blue axis directions in sequence.
- `ModraUp::Axes#to_a` — Returns the origin and directions of the red, green, and blue axes in sequence.
- `ModraUp::Axes#sketch_plane` — The coefficients of the four plane equations for the red-green axis plane.
- `ModraUp::Axes#model` — The model it belongs to.
- `ModraUp::Axes#parent` — The model it belongs to.
- `ModraUp::Axes#valid?` — The model is still open.
- `ModraUp::Axes#deleted?` — Whether the containing model is closed.

## `ModraUp::Behavior` · `< ModraUp::Entity`

Controls component behaviors such as gluing, scale handles, and facing the camera. Obtain it from {ModraUp::ComponentDefinition#behavior}.

- `ModraUp::Behavior#always_face_camera?` — Always face the component towards the camera (-Y face towards the camera).
- `ModraUp::Behavior#always_face_camera=` — Sets the Face Me. This ensures that the face always faces the camera.
- `ModraUp::Behavior#cuts_opening?` — Whether to cut an opening when sticking to a face.
- `ModraUp::Behavior#cuts_opening=` — Set the opening. Typically, {#is2d=} should also be set.
- `ModraUp::Behavior#is2d?` — Can be glued to other faces (Glue to).
- `ModraUp::Behavior#is2d=` — Sets whether attachment is allowed.
- `ModraUp::Behavior#shadows_face_sun?` — Returns whether shadows are calculated with the face oriented toward the sun.
- `ModraUp::Behavior#shadows_face_sun=` — Sets the face to cast a shadow towards the sun.
- `ModraUp::Behavior#snapto` — Snap Plane: {SnapTo_Arbitrary} / {SnapTo_Horizontal} / {SnapTo_Vertical} / {SnapTo_Sloped}.
- `ModraUp::Behavior#snapto=` — Set the snap plane.
- `ModraUp::Behavior#no_scale_mask?` — Thumb grip hidden bit mask. Note that the method name ends with a question mark and returns an integer.
- `ModraUp::Behavior#no_scale_mask=` — Sets the mask for hiding the scale handles of a single component: bit0=X, bit1=Y, bit2=Z, bit3=XZ, bit4=YZ, bit5=XY, bit6=uniform corner scaling. After setting, re-activate the scale tool. Note that this mask does not restrict direct transformation of the component via the API.

## `ModraUp::Camera` · OS3D

Viewport Camera: eye, target, up, field of view, and projection. Obtain the current camera from {ModraUp::View#camera}, or create one with {ModraUp::Camera.new}. +to_s+ returns "Sketchup::Camera".

- `ModraUp::Camera#initialize` — Construct the camera. With three parameters, it defaults to a perspective view with a field of view of 30 degrees.
- `ModraUp::Camera#set` — Sets the eye, target, and up direction simultaneously.
- `ModraUp::Camera#eye` — Camera position.
- `ModraUp::Camera#target` — Target. The point where the camera is aimed.
- `ModraUp::Camera#up` — Up direction. The track camera is derived from the Z-axis, with custom roll not saved.
- `ModraUp::Camera#perspective?` — Returns whether the projection is perspective.
- `ModraUp::Camera#perspective` — See {#perspective?}.
- `ModraUp::Camera#perspective=` — Perspective is true, orthographic is false.
- `ModraUp::Camera#fov` — Vertical field of view in degrees.
- `ModraUp::Camera#fov=` — Sets the vertical field of view.
- `ModraUp::Camera#aspect_ratio` — Aspect ratio of the view. +0.0 indicates that it matches the viewport.
- `ModraUp::Camera#aspect_ratio=` — Set the aspect ratio of the view. +0+ indicates that it will match the viewport's aspect ratio.
- `ModraUp::Camera#center_2d` — Translation: The translation offset for two-point perspective or photo matching (in normalized device coordinates). The +z+ value is always 0.
- `ModraUp::Camera#description` — Camera description text.
- `ModraUp::Camera#description=` — Set the camera description text.
- `ModraUp::Camera#direction` — The direction of the view, which is the same as the #zaxis.
- `ModraUp::Camera#focal_length` — The focal length (in millimeters) calculated from {#fov} and {#image_width}. If {#image_width} is 0, it defaults to 36 mm.
- `ModraUp::Camera#focal_length=` — Sets the field of view using the focal length in millimeters. Valid range is 1..3000.
- `ModraUp::Camera#fov_is_height?` — Returns whether the field of view is measured in the vertical direction.
- `ModraUp::Camera#height` — Parallel projection visible height (in inches). Perspective camera also returns an equivalent height.
- `ModraUp::Camera#height=` — Sets the visible height for parallel projection in inches.
- `ModraUp::Camera#image_width` — Frame width in millimeters used to calculate {#focal_length}. A value of +0+ means 36 mm.
- `ModraUp::Camera#image_width=` — Set the image width in millimeters. +0+ indicates that the focal length is calculated based on 36 mm. This does not affect the viewport display.
- `ModraUp::Camera#is_2d?` — Returns true if the camera is in two-point perspective (or matches a photograph).
- `ModraUp::Camera#scale_2d` — The scale factor for two-point perspective. Not scaled to +1.0+.
- `ModraUp::Camera#xaxis` — The camera coordinate system X-axis (right) is obtained by the cross product of the view direction and the up direction.
- `ModraUp::Camera#yaxis` — Camera coordinate system y-axis (up), perpendicular to the line of sight.
- `ModraUp::Camera#zaxis` — The camera coordinate system Z-axis, which is the same as {#direction}.
- `ModraUp::Camera#focus_at` `OS3D` — Focus the camera on the depth of point +point+, without translating or scaling the current view. Preserve the perspective eye position, and maintain the field of view height for parallel projection.
- `ModraUp::Camera#zoom_at` `OS3D` — Zoom around a world point while maintaining that point's screen position. A factor greater than 1 moves the view farther away, while a factor less than 1 moves the view closer.

## `ModraUp::Color`

RGBA colors. The integers in the constructor are handled as bytes, floats are multiplied by 255, truncated, and clamped to the range 0–255.

- `ModraUp::Color.names` — Known color names (from the SketchUp Materials Browser / CSS table). {ModraUp::View#drawing_color=} also recognizes these names.
- `ModraUp::Color#initialize` — Construct a color. With no parameters, it initializes to black and opaque. The +name+ can be a name from {ModraUp::Color.names} (case-insensitive), or a CSS hexadecimal value (+#rgb+ / +#rrggbb+). Each channel can accept an integer or a float (e.g., +0.5+ → +127+), with values clamped to the range 0–255. A single integer is parsed as +0xBBGGRR+, with higher bits ignored, and alpha is set to 255.
- `ModraUp::Color#red` — Red channel (0–255).
- `ModraUp::Color#green` — Green channel (0–255).
- `ModraUp::Color#blue` — Blue channel (0–255).
- `ModraUp::Color#alpha` — Opacity channel (0–255).
- `ModraUp::Color#red=` — Set the red channel. Decimal values are truncated to bytes, with results ranging from 0–255.
- `ModraUp::Color#green=` — Set the green channel. Decimal values are truncated to the nearest byte, and the result must be in the range 0–255.
- `ModraUp::Color#blue=` — Set the blue channel. Decimal values are truncated to bytes, with results ranging from 0–255.
- `ModraUp::Color#alpha=` — Set opacity. Integer must be in the range 0–255, Float must be in the range 0.0–1.0, scaled to bytes (+0.5+ → +127+).
- `ModraUp::Color#to_a` — Returns +[red, green, blue, alpha]+.
- `ModraUp::Color#to_i` — Returns an integer in the format +0xBBGGRR+, excluding alpha.
- `ModraUp::Color#to_s` — Returns a four-channel description, such as +Color( 18, 52, 86, 255)+.
- `ModraUp::Color#blend` — Returns a new color, blending the RGBA channels with the formula: `+new_color = +self + weight * (other - self) +`, where fractional parts are truncated and the result is clamped to the range 0–255. The input colors are not modified; the `+other+` color can be any value accepted by the constructor.
- `ModraUp::Color#==` — If all four channels are equal, it returns true.

## `ModraUp::ComponentDefinition` · OS3D · `< ModraUp::Drawingelement`

Component Definition: A dictionary of name and definition-level properties. Inherits from {ModraUp::Drawingelement}.

- `ModraUp::ComponentDefinition#name` — Name.
- `ModraUp::ComponentDefinition#name=` — Set the definition name. An empty string will raise an error; if it conflicts with other definitions, an automatic suffix of +#2+ will be added.
- `ModraUp::ComponentDefinition#description` — Definition description. Will be an empty string if not filled.
- `ModraUp::ComponentDefinition#description=` — Set the definition description.
- `ModraUp::ComponentDefinition#typename` — Fixes to +ComponentDefinition+.
- `ModraUp::ComponentDefinition#entityID` — The definition ID within the current session, see {ModraUp::Entity#entityID}.
- `ModraUp::ComponentDefinition#guid` — Define the GUID. Leave it as an empty string if it is not present when imported.
- `ModraUp::ComponentDefinition#valid?` — Returns true if the definition is still in the model.
- `ModraUp::ComponentDefinition#deleted?` — Opposite of {#valid?}.
- `ModraUp::ComponentDefinition#entities` — Define the internal drawing context.
- `ModraUp::ComponentDefinition#instances` — All instances of {ModraUp::ComponentInstance} / {ModraUp::Group} that reference this definition, including those embedded in other definitions.
- `ModraUp::ComponentDefinition#count_instances` — Returns the number of placed instances referencing this definition, equal to {#instances}.length. Includes instances that use the definition but are not currently placed.
- `ModraUp::ComponentDefinition#count_used_instances` — Counts the actual occurrences from the model root. When a child definition is placed multiple times under a parent definition, the counts are multiplied by level.
- `ModraUp::ComponentDefinition#attribute_dictionaries` — Attribute dictionary at the definition level. Returns nil if none is defined.
- `ModraUp::ComponentDefinition#attribute_dictionary` — Retrieve the definition-level attribute dictionary by name. Returns `nil` if the attribute dictionary does not exist; creates an empty dictionary if `create` is true.
- `ModraUp::ComponentDefinition#set_attribute` — Write a definition-level attribute. The type written is the type read back.
- `ModraUp::ComponentDefinition#get_attribute` — Read the definition-level attribute. When +dict_name+ and +key+ are Symbols, convert them to strings.
- `ModraUp::ComponentDefinition#delete_attribute` — Delete attribute keys or an entire dictionary at the definition level.
- `ModraUp::ComponentDefinition#save_thumbnail` — Write the definition thumbnail to +path+ (PNG). Render with the same set of faces and edges coloring as {#thumbnail_camera} (if not set, bound the definition bounding box); bake with no geometry, no UI, or if writing to disk fails, return +false+.
- `ModraUp::ComponentDefinition#refresh_thumbnail` — Request to refresh the component browser thumbnail (invalidate dirty memory cache; re-bake next time it is displayed).
- `ModraUp::ComponentDefinition#bounds` — Define the axis-aligned bounding box in local coordinates (excluding instance transformations).
- `ModraUp::ComponentDefinition#invalidate_bounds` — Drop the definition bounds cache. This implementation recalculates {#bounds} on every call, invalidating the viewport tessellation.
- `ModraUp::ComponentDefinition#behavior` — The definition's {ModraUp::Behavior}.
- `ModraUp::ComponentDefinition#group?` — Returns true if the component definition is a group (as opposed to a regular component).
- `ModraUp::ComponentDefinition#hidden?` — Hides the component in the component browser.
- `ModraUp::ComponentDefinition#image?` — Returns whether this is an image definition. Currently always returns false.
- `ModraUp::ComponentDefinition#internal?` — Is an internal definition within the model (not loaded from a file). Currently, this is always true.
- `ModraUp::ComponentDefinition#live_component?` — Returns whether the component is a Live Component. Currently, this always returns false.
- `ModraUp::ComponentDefinition#manifold?` — Is a closed solid: each live edge is exactly shared by two live faces, equivalent to the manifold determination within {ModraUp::Entities}.
- `ModraUp::ComponentDefinition#path` — Returns the file path of the loaded definition. An in-memory definition is an empty string.
- `ModraUp::ComponentDefinition#insertion_point` — Insertion point. Fixed at the origin since SketchUp 2020.
- `ModraUp::ComponentDefinition#insertion_point=` — Set the insertion point. No operation in SketchUp 2020 and later.
- `ModraUp::ComponentDefinition#load_time` — Define load time (in Unix seconds). New definitions in memory have an epoch time.
- `ModraUp::ComponentDefinition#save_as` — Save the definition as a SketchUp .skp file. The root entity is the geometry of this definition; nested definitions are included.
- `ModraUp::ComponentDefinition#save_copy` — Save a copy +.skp+, without modifying the current {#path}. Write the same content as {#save_as}.
- `ModraUp::ComponentDefinition#add_classification` `OS3D` — Add a schema/type classification to the definition. An empty name returns false; adding the same schema will replace the type.
- `ModraUp::ComponentDefinition#remove_classification` — Remove the added schema/type. If not found, return false, and clear the classification values under that schema.
- `ModraUp::ComponentDefinition#get_classification_value` — Read classification attributes along a path. The path's first item is the schema name; otherwise, it returns +nil+.
- `ModraUp::ComponentDefinition#set_classification_value` — Write the classification attribute along the path. The schema must be {#add_classification}; otherwise, it returns +false+.
- `ModraUp::ComponentDefinition#add_observer` — Register a {ModraUp::DefinitionObserver}. Adding the same object a second time returns false. {ModraUp::Entities#add_instance} dispatches an +onComponentInstanceAdded+ event.
- `ModraUp::ComponentDefinition#remove_observer` — Remove the observer from the definition.
- `ModraUp::ComponentDefinition#model` — The model it belongs to.
- `ModraUp::ComponentDefinition#parent` — The parent object of the definition is the model.
- `ModraUp::ComponentDefinition#persistent_id` — The definition ID that persists with the model, see {ModraUp::Entity#persistent_id}.
- `ModraUp::ComponentDefinition#thumbnail_camera` — Thumbnail camera. Unset when it bounds the definition bounding box.
- `ModraUp::ComponentDefinition#thumbnail_camera=` — Set the thumbnail camera. Afterward, {#thumbnail_camera} read back the same viewpoint.
- `ModraUp::ComponentDefinition#==` — The same slot in the same model returns true.
- `ModraUp::ComponentDefinition#<=>` — Compare by {#name} for use with +sort+.
- `ModraUp::ComponentDefinition#casts_shadows?` — The definition does not cast shadows. Always returns false.
- `ModraUp::ComponentDefinition#casts_shadows=` — Defines the projection switch for the definition level. Current storage is not supported.
- `ModraUp::ComponentDefinition#receives_shadows?` — The definition does not receive shadows. Always returns false.
- `ModraUp::ComponentDefinition#receives_shadows=` — Defines the shadow reception switch for the component definition. The setting is not currently stored.
- `ModraUp::ComponentDefinition#visible?` — Determines if the definition is visible in the component browser. Opposite of {#hidden?}.
- `ModraUp::ComponentDefinition#visible=` — Set the component browser visibility to true. Equivalent to {#hidden=} with a value of false.
- `ModraUp::ComponentDefinition#hidden=` — Sets the component browser hidden flag.
- `ModraUp::ComponentDefinition#erase!` — Delete this definition from the definition table. Throws an error if there are instances remaining.
- `ModraUp::ComponentDefinition#layer` — Returns the default Layer0 if the definition has no layer.
- `ModraUp::ComponentDefinition#layer=` — Define without a layer, write it as ignored.
- `ModraUp::ComponentDefinition#material` — Inherits from {Drawingelement#material}. The definition itself does not define a drawing material and is always +nil+.
- `ModraUp::ComponentDefinition#material=` — Inherits from {Drawingelement#material=}. The definition itself cannot be colored; the assignment is ignored.
- `ModraUp::ComponentDefinition#locked?` — Definitions cannot be locked.
- `ModraUp::ComponentDefinition#locked=` — Definitions cannot be locked, writes are ignored.
- `ModraUp::ComponentDefinition#attach_procedure` — Converts the definition to a procedural component. Existing entities become control entities in a hidden inputs group, and {#entities} exposes the output. Specify a registered procedure or its ID in +procedure+. Keys in +parameters+ must be declared by the procedure. Omitted parameters use their declared +default+. If validation or execution fails, the operation is rolled back and raises ArgumentError.
- `ModraUp::ComponentDefinition#procedural?` — Added Ruby procedures, or generated by native process tools. Parameters components (node graphs) do not count.
- `ModraUp::ComponentDefinition#control_entities` — Input entities for a process component.
- `ModraUp::ComponentDefinition#get_procedure_parameters` — Current parameters (Symbol keys). An empty Hash when the process is not registered in this session.
- `ModraUp::ComponentDefinition#set_procedure_parameters` — Merge parameters and regenerate the output in one step. Undo on failure, rolling back the entire step and raising an ArgumentError.
- `ModraUp::ComponentDefinition#run_procedures` — +:if_modified+ runs the procedure only if the control entity has been modified;+:force+ runs the procedure regardless. If no procedures are registered, nothing happens.
- `ModraUp::ComponentDefinition#make_non_procedural` — Remove Procedural: +:keep_output+ Keep Output (keep input when output is empty), +:keep_input+ Keep Control Entity. One undo step.

## `ModraUp::ComponentInstance` · OS3D · `< ModraUp::Drawingelement`

Component Instance.

- `ModraUp::ComponentInstance#definition` — The definition (or component) that this instance (or group) references.
- `ModraUp::ComponentInstance#glued_to` — The face or group/component instance that the instance is glued to; nil if not glued or if the target has been deleted.
- `ModraUp::ComponentInstance#glued_to=` — Glues the instance to a face, group, or component instance in the same entities collection. Pass nil to detach it. Raises ArgumentError if the definition disallows gluing, the alignment is incompatible, the object is locked, or the attachment would create a cycle.
- `ModraUp::ComponentInstance#name` — Instance name. Returns an empty string if unnamed.
- `ModraUp::ComponentInstance#name=` — Set the instance name.
- `ModraUp::ComponentInstance#transformation` — Transformation of the instance in the parent drawing context.
- `ModraUp::ComponentInstance#transformation=` — Set the transformation of the instance within its parent drawing context.
- `ModraUp::ComponentInstance#transform!` — Left multiply the transformation (apply +transformation+ first, then apply the original transformation).
- `ModraUp::ComponentInstance#explode` — Explodes the instance into its parent drawing context. The parent can be an unopened group or definition. Returns +false+ on failure. After success, the instance {#deleted?}.
- `ModraUp::ComponentInstance#make_unique` — If there are other instances sharing the same definition, make a copy of the definition and only point this instance to it. If it is already unique, perform no operation.
- `ModraUp::ComponentInstance#scaled_size` — The scaled size of the definition bounding box of an applied instance (width, height, depth).
- `ModraUp::ComponentInstance#local_bounds` — Define the local bounding box, excluding the instance transformation.
- `ModraUp::ComponentInstance#entities` — The drawing context within the instance definition. Changing this will affect all instances sharing the same definition, but will not {#make_unique}.
- `ModraUp::ComponentInstance#add_observer` — Register a {ModraUp::InstanceObserver}. Adding the same object a second time returns false.
- `ModraUp::ComponentInstance#remove_observer` — Remove the previously registered instance observer.
- `ModraUp::ComponentInstance#guid` — The unique base64 id of the instance placement (SKP VFF 6819). Will be an empty string if not imported.
- `ModraUp::ComponentInstance#manifold?` — Deprecated: Same as {ModraUp::ComponentDefinition#manifold?}, only checks the definition not the transformation.
- `ModraUp::ComponentInstance#volume` — Returns the volume in cubic inches. The value is positive for a manifold solid and negative for non-manifold geometry.
- `ModraUp::ComponentInstance#move!` — Sets the transformation, similar to #transformation= but does not record it in the undo stack (for animations/scene transitions).
- `ModraUp::ComponentInstance#subtract` — Subtract this instance from +other+ (+other+ - this instance). The result is always a new {ModraUp::Group} (geometrically baked into the parent space). Both must be manifold shells in the same parent {ModraUp::Entities}. On success, both are deleted. Returns +nil+ if either is not a manifold, the result is empty, locked, deleted, or not in the same parent context; the model remains unchanged.
- `ModraUp::ComponentInstance#trim` — Cut the instance with another instance. The current instance remains; another instance is replaced by another instance minus the current instance.
- `ModraUp::ComponentInstance#union` — The union of this instance with +other+ results in a new {ModraUp::Group}. It succeeds only if both instances are valid and not nil. Upon success, both original instances are deleted. Failure conditions are the same as for {#subtract}.
- `ModraUp::ComponentInstance#intersect` — Returns the intersection volume between this instance and +other+. The result is a new group in the parent context with geometry baked into the parent space. Both sides must be manifold shells in the same parent {ModraUp::Entities}. Both sides are deleted on success. Returns +nil+ if they do not intersect, are non-manifold, locked, deleted, or not in the same parent context; the model remains unchanged.
- `ModraUp::ComponentInstance#outer_shell` — The outer surface of two manifold shells (volume union, internal faces removed). The result is a new group in the parent context. Both are deleted if successful. Solids do not need to intersect: if they are completely separate, both shells remain in the resulting group; if one completely encloses the other, only the outer shell remains. Failure conditions are the same as for {#intersect}.
- `ModraUp::ComponentInstance#split` — Splits two manifold solids at their intersection. Returns three new groups on Layer0 in this order: the part of +other+ outside the receiver (Difference2), the part of the receiver outside +other+ (Difference1), and their shared volume (Intersection). The operation removes the original objects. If the volumes do not overlap, the intersection group is empty and the difference groups contain the original solids. For a non-manifold input or a failed operation, returns +nil+ and leaves the model unchanged.
- `ModraUp::ComponentInstance#show_differences` `OS3D` — Compares the volumes of two manifold solids in their shared parent space. Returns +true+ for equal volumes in the same location, otherwise +false+. Both containers move to Layer0. Coincident faces and edges go on a layer ending in +_same+ and remaining geometry on a layer ending in +_diff+. The prefix is the group instance name (or its definition name if empty), or the component definition name. With +verbose+ enabled, the console lists the centers of differing faces. A non-manifold, locked, deleted, or differently parented input returns +false+ without changing the model. Shared definitions are made unique first, preserving other instances.
- `ModraUp::ComponentInstance#hatch_pattern` — Read the hatch pattern of this group/component itself. It also applies to nested groups and components, taking precedence over material patterns.
- `ModraUp::ComponentInstance#hatch_pattern=` — Sets the hatch pattern for this group/component itself, no material assignment needed; nil removes the pattern.

## `ModraUp::Console`

Hosted in the Ruby Console. SketchUp redirects +$stdout+ / +$stderr+ to the single instance of {SKETCHUP_CONSOLE}, so plugins' +p+ / +puts+ / +warn+ will write to the console window rather than the process terminal. Objects conform to the IO duck type by providing +write+ / +flush+ / +tty?+, otherwise MRI 3.2 will raise a NoMethodError when writing warnings. Writes from non-main threads will be dropped (consistent with SketchUp 2014+).

- `ModraUp::Console#write` — Write the string to the console without a newline. Returns the number of bytes written. {Kernel#p} / {Kernel#puts}
- `ModraUp::Console#<<` — Like {#write}, returns self so that +$stdout << "x"+ can be chained.
- `ModraUp::Console#flush` — The console has no underlying buffer and returns `self` with an empty operation. MRI redirects `+$stderr+` to this object, causing warnings and {RubyVM::InstructionSequence.compile} to call `flush`; without this method, the plugin `require 'forwardable'` will raise a `NoMethodError`.
- `ModraUp::Console#tty?` — Not a terminal. Use `$stdout.tty?`. Go here.
- `ModraUp::Console#isatty` — Alias for {#tty?}.
- `ModraUp::Console#closed?` — The console cannot be closed and remains false.
- `ModraUp::Console#close` — Does nothing. The standard library sometimes calls `close` on `$stdout`.
- `ModraUp::Console#close_write` — Does nothing.
- `ModraUp::Console#sync` — Unbuffered, always true.
- `ModraUp::Console#sync=` — Ignore the assignment and still treat it as unbuffered.
- `ModraUp::Console#show` — Open the Ruby Console window.
- `ModraUp::Console#hide` — Hide the Ruby Console window.
- `ModraUp::Console#clear` — Clear the console output.
- `ModraUp::Console#visible?` — Whether the Console window is displayed.

## `ModraUp::ConstructionLine` · `< ModraUp::Drawingelement`

Auxiliary lines. Not a {ModraUp::Edge}. Created using {Entities#add_cline}, and cannot be directly instantiated with +new+. {#start} / {#end} being +nil+ indicates an infinite endpoint.

- `ModraUp::ConstructionLine#start` — Finite endpoint; infinite endpoint is +nil+.
- `ModraUp::ConstructionLine#start=` — Set the start point. The point will project onto the current construction line; +nil+ makes this end infinite (semi-infinite or both ends).
- `ModraUp::ConstructionLine#end` — Finite endpoints; infinite endpoints are +nil+.
- `ModraUp::ConstructionLine#end=` — Set the endpoint. The point will project onto the current construction line; +nil+ makes the endpoint infinite.
- `ModraUp::ConstructionLine#position` — Reference point on the construction line (in inches).
- `ModraUp::ConstructionLine#position=` — Make the construction line pass through the point: translate it perpendicularly to {#direction}, without sliding along itself.
- `ModraUp::ConstructionLine#direction` — Unit direction.
- `ModraUp::ConstructionLine#direction=` — Set the direction (normalized), rotate around {#position}, and limit the end to maintain the parameter along the old direction.
- `ModraUp::ConstructionLine#reverse!` — Reverse: Reverses the direction, swaps the start and end points {#start} / {#end}.

## `ModraUp::ConstructionPoint` · `< ModraUp::Drawingelement`

Helper points. Not BRep vertices: no weld points, do not enter edge tables. Created using {Entities#add_cpoint}, cannot be directly instantiated with +new+.

- `ModraUp::ConstructionPoint#position` — Construction point coordinates (inches).

## `ModraUp::Curve` · `< ModraUp::Entity`

Curves on the edge. Circles/-arcs are a subclass {ModraUp::ArcCurve}. They are not {ModraUp::Drawingelement}.

- `ModraUp::Curve#vertices` — Returns the vertices of the curve in the order of curve edges, without repeating the starting point for closed curves.
- `ModraUp::Curve#each_edge` — Iterate through each edge of the curve; returns an Enumerator if no block is passed.
- `ModraUp::Curve#length` — The length of a general curve is the sum of the lengths of its segments, while an arc length is calculated by multiplying the radius by the swept angle.
- `ModraUp::Curve#is_polygon?` — Returns true if the curve is a polygon created by a polygon tool, add_ngon, or a conversion operation.
- `ModraUp::Curve#move_vertices` — Move all vertices of the curve, the number of vertices must match the input, preserving curve association for non-circular transformations.
- `ModraUp::Curve#count_edges` — The number of edges that compose the curve.
- `ModraUp::Curve#edges` — The edges that compose this curve.
- `ModraUp::Curve#first_edge` — The first edge.
- `ModraUp::Curve#last_edge` — The last edge.
- `ModraUp::Curve#typename` — Type Name +ArcCurve+.
- `ModraUp::Curve#entityID` — The curve entity ID within the current Sketchup session.
- `ModraUp::Curve#persistent_id` — Curve ID saved with the model, see {ModraUp::Entity#persistent_id}.
- `ModraUp::Curve#parent` — The owner in the drawing context.
- `ModraUp::Curve#attribute_dictionaries` — Arc curves do not have attribute dictionaries.
- `ModraUp::Curve#set_attribute` — Arc curves do not support attribute dictionaries.

## `ModraUp::DefinitionList` · OS3D · `< ModraUp::Entity`

The model's component definitions, available through {ModraUp::Model#definitions}. Use {#add} for an empty definition, {#load} for a local .skp or .osk3d file, {#import} for an .osk3d import, and {#load_from_url} to download and load a definition. Use {#[]} to look up an existing definition by name, GUID, or index.

- `ModraUp::DefinitionList#[]` — Retrieve a definition by name, GUID, or 0-based index. Negative indices count from the end. Strings match by name or GUID, with ASCII letters case-insensitive. Unmatched strings return `nil`.
- `ModraUp::DefinitionList#at` — Alias for {#[]}.
- `ModraUp::DefinitionList#length` — The number of defined entities (including group definitions) that have not been deleted.
- `ModraUp::DefinitionList#size` — Alias for {#length}.
- `ModraUp::DefinitionList#each` — Iterate through the non-deleted definitions.
- `ModraUp::DefinitionList#add` — Add a component definition.
- `ModraUp::DefinitionList#unique_name` — Returns an unused definition name. ASCII letters are case-insensitive when compared, and if a duplicate name is found, it appends #1, #2, etc., without creating the definition.
- `ModraUp::DefinitionList#purge_unused` — Purge unused definitions by retaining only those definitions and their sub-definitions that still have instances placed in the model.
- `ModraUp::DefinitionList#remove` — Removes the definition of a specified component or group, as well as all instances of that definition from the model.
- `ModraUp::DefinitionList#load` `OS3D` — Load component definitions from +.skp+ or native +.osk3d+ files. {ModraUp::ComponentDefinition#path} is the file path, and {ModraUp::ComponentDefinition#load_time} is the current time. Changes loaded from OSK3D can be undone.
- `ModraUp::DefinitionList#import` `OS3D` — Import a native +.osk3d+ file as an unplaced component definition. SKP files use {ModraUp::DefinitionList#load}.
- `ModraUp::DefinitionList#load_from_url` — Loads a .skp component definition from an HTTP or HTTPS URL. The call blocks until the download finishes. An optional handler implements the {ModraUp::LoadHandler} callbacks +cancelled?+, +onPercentChange(percent)+, +onSuccess+, and +onFailure(message)+. Without a handler, failures raise {IOError}. With a handler, failures call +onFailure+ and return +nil+. Dynamic Components uses this path through +DCDownloader+.
- `ModraUp::DefinitionList#add_observer` — Register a {ModraUp::DefinitionsObserver}. Re-registering the same object still returns +true+, but the event is dispatched only once. {#add} / {#load} will dispatch an +onComponentAdded+ event.
- `ModraUp::DefinitionList#remove_observer` — Remove observers from the definition list.

## `ModraUp::DefinitionObserver`

Observer for a single component definition. Registered with {ModraUp::ComponentDefinition#add_observer}.

- `ModraUp::DefinitionObserver#onComponentInstanceAdded` — Called when an instance is added to this definition.
- `ModraUp::DefinitionObserver#onComponentInstanceRemoved` — Called when an instance is removed from the definition. Triggers after operations like {ModraUp::Group#explode} / {ModraUp::ComponentInstance#explode}, and {ModraUp::Group#union} / {ModraUp::Group#subtract} / {ModraUp::Group#trim} consume their operands.

## `ModraUp::DefinitionsObserver`

Define list observer. Registered via {ModraUp::DefinitionList#add_observer}.

- `ModraUp::DefinitionsObserver#onComponentAdded` — Called after {ModraUp::DefinitionList#add} or {ModraUp::DefinitionList#load}.
- `ModraUp::DefinitionsObserver#onComponentRemoved` — Called when a definition is deleted. Dispatches after {ModraUp::ComponentDefinition#erase!} succeeds.
- `ModraUp::DefinitionsObserver#onComponentPropertiesChanged` — Called when the name or description of a definition changes.
- `ModraUp::DefinitionsObserver#onComponentTypeChanged` — Called when the definition type changes. The current host does not dispatch this.

## `ModraUp::Dimension` · `< ModraUp::Drawingelement`

Base class for dimensions. Direct construction with +new+ is unsupported. For linear dimensions see {ModraUp::DimensionLinear}.

- `ModraUp::Dimension#arrow_type` — Arrow style. See {ARROW_NONE} / {ARROW_SLASH} / {ARROW_DOT} / {ARROW_CLOSED} / {ARROW_OPEN}.
- `ModraUp::Dimension#arrow_type=` — Sets the arrow style.
- `ModraUp::Dimension#has_aligned_text?` — Does the text align along the dimension line? If not, it faces the screen.
- `ModraUp::Dimension#has_aligned_text=` — Sets whether the text is aligned along the dimension line.
- `ModraUp::Dimension#text` — The current display of dimension text (formatted in model units for measured length).
- `ModraUp::Dimension#plane` — Plane on which the dimension lies +[a, b, c, d]+ (ax + by + cz + d = 0).
- `ModraUp::Dimension::ARROW_NONE` — {#arrow_type}: No arrow.
- `ModraUp::Dimension::ARROW_SLASH` — {#arrow_type}: Slash (default).
- `ModraUp::Dimension::ARROW_DOT` — {#arrow_type}: Dot.
- `ModraUp::Dimension::ARROW_CLOSED` — {#arrow_type}: Solid arrow.
- `ModraUp::Dimension::ARROW_OPEN` — {#arrow_type}: Hollow arrow.

## `ModraUp::DimensionLinear` · OS3D · `< ModraUp::Dimension`

Linear dimensions. Created using {ModraUp::Entities#add_dimension_linear}, and can be retrieved using {ModraUp::Selection} +grep+.

- `ModraUp::DimensionLinear#start` — Start: Optional anchor entities (coincident with context vertices) and point coordinates.
- `ModraUp::DimensionLinear#start=` — Set the start point. Can be a point or {ModraUp::Vertex}.
- `ModraUp::DimensionLinear#end` — Optional anchor entities and point coordinates.
- `ModraUp::DimensionLinear#end=` — Set the endpoint. Can be a point or {ModraUp::Vertex}.
- `ModraUp::DimensionLinear#offset_vector` — The offset vector from the start point to the dimension line.
- `ModraUp::DimensionLinear#offset_vector=` — Sets the offset vector from the start point to the dimension line.
- `ModraUp::DimensionLinear#text_position` — The position of text along the dimension line. Currently always {TEXT_CENTERED}.
- `ModraUp::DimensionLinear#aligned_text_position` — Aligns the text relative to the dimension line. Currently always {ALIGNED_TEXT_CENTER}.
- `ModraUp::DimensionLinear#start_attached_to` `OS3D` — Returns the start anchor on the nested instance path. Currently, there is no {ModraUp::InstancePath} wrapper, so it always returns +nil+.
- `ModraUp::DimensionLinear#end_attached_to` `OS3D` — The endpoint anchor on the nested instance path. Currently always +nil+.
- `ModraUp::DimensionLinear::TEXT_OUTSIDE_START` — {text_position}: Text outside the start point.
- `ModraUp::DimensionLinear::TEXT_CENTERED` — {#text_position}: Text Centered (Current Read Value).
- `ModraUp::DimensionLinear::TEXT_OUTSIDE_END` — {text_position}: Text outside the endpoint.
- `ModraUp::DimensionLinear::ALIGNED_TEXT_ABOVE` — #{aligned_text_position}: Aligns the text above the dimension line.
- `ModraUp::DimensionLinear::ALIGNED_TEXT_CENTER` — {#aligned_text_position}: Align text center (current read value).
- `ModraUp::DimensionLinear::ALIGNED_TEXT_OUTSIDE` — {#aligned_text_position}: Align text outside.

## `ModraUp::DimensionObserver`

Base class for Dimension Annotation Observers. Can be subclassed to avoid NameError.

- `ModraUp::DimensionObserver#onTextChanged` — Dimension text changed. Currently, no notification is dispatched.

## `ModraUp::Drawingelement` · `< ModraUp::Entity`

A drawable {ModraUp::Entity}. Subclasses include {ModraUp::Face}, {ModraUp::Edge}, {ModraUp::Group}, {ModraUp::ComponentInstance}, and {ModraUp::ComponentDefinition}. Vertices, loops, and curves derive separately from Entity.

- `ModraUp::Drawingelement#layer` — Layer it belongs to (Tag). Defaults to Layer0 if not specified.
- `ModraUp::Drawingelement#layer=` — Set the layer. The string must be an existing layer name, otherwise an error is thrown.
- `ModraUp::Drawingelement#bounds` — Axis-aligned bounding box.
- `ModraUp::Drawingelement#locked?` — Locked. Locked faces/edges cannot be erased.
- `ModraUp::Drawingelement#locked=` — Set the lock. Begin a model transaction (if an existing +start_operation+ is present, incorporate it into this operation).
- `ModraUp::Drawingelement#casts_shadows?` — Casts shadows. Defaults to +true+. Viewport shadows are not yet enabled.
- `ModraUp::Drawingelement#casts_shadows=` — Sets whether the drawing element casts shadows.
- `ModraUp::Drawingelement#receives_shadows?` — Returns whether the drawing element receives shadows. Defaults to +true+. Viewport shadows are not enabled yet.
- `ModraUp::Drawingelement#receives_shadows=` — Sets whether the drawing element receives shadows.
- `ModraUp::Drawingelement#material` — Materials. If unspecified, it defaults to +nil+. {ModraUp::Edge}, {ModraUp::Face} (front), {ModraUp::Group}, {ModraUp::ComponentInstance}, {ModraUp::Image}, {ModraUp::Text}, {ModraUp::Dimension}, {ModraUp::ConstructionLine}, {ModraUp::ConstructionPoint}, and {ModraUp::SectionPlane} all inherit this method. The back of a {ModraUp::Face} uses {Face#back_material}.
- `ModraUp::Drawingelement#material=` — Set the material. +nil+ clears it. The string is first interpreted as a material name, then as a CSS/X11 color name. Subclasses inherit this method;
- `ModraUp::Drawingelement#hidden?` — Returns whether the element itself is hidden. Layer hiding is not considered.
- `ModraUp::Drawingelement#hidden=` — Sets itself to hidden. Transacts the model (if an existing +start_operation+ is present, it is included in that operation).
- `ModraUp::Drawingelement#visible?` — Returns true if the element is not hidden (opposite of {#hidden?}). The layer may still hide it.
- `ModraUp::Drawingelement#visible=` — Opposite of {#hidden=}.
- `ModraUp::Drawingelement#erase!` — Delete this face, edge, group, component instance, or linear dimension. The containing set does not have to be the active drawing context.

## `ModraUp::Edge` · `< ModraUp::Drawingelement`

An edge. Inspect its soft and smooth flags, its owning {ModraUp::Curve}, and its connections to adjacent geometry. Use {ModraUp::Edge#find_faces} to form faces and {ModraUp::Edge#split} to split the edge.

- `ModraUp::Edge#soft?` — Soft Edge (hides geometry, selects faces as surfaces).
- `ModraUp::Edge#soft=` — Set the soft edge. Begin a model transaction (if an existing +start_operation+ is provided, include it in the operation).
- `ModraUp::Edge#smooth?` — Smooth Edge (adjacent face shading transition).
- `ModraUp::Edge#smooth=` — Set the edge to smooth. Go through a model transaction.
- `ModraUp::Edge#start` — The start point of an edge.
- `ModraUp::Edge#end` — The endpoint of an edge.
- `ModraUp::Edge#curve` — Belongs to a curve, edge, circle, or arc. An independent edge is +nil+.
- `ModraUp::Edge#all_connected` — Returns the faces and edges connected to this edge, including the edge itself.
- `ModraUp::Edge#common_face` — The face common to two edges.
- `ModraUp::Edge#explode_curve` — Remove the associated circle or arc; the edge remains. If not a curve, return it unchanged.
- `ModraUp::Edge#faces` — Return the faces that use this edge.
- `ModraUp::Edge#find_faces` — Create all faces that can be formed using this edge, return the count of new faces created. Operates within a model transaction.
- `ModraUp::Edge#length` — Length (in inches {Length}). An optional transformation can be applied to calculate the scaled length.
- `ModraUp::Edge#line` — Geometric Line: Start Point Plus Direction.
- `ModraUp::Edge#other_vertex` — Given one endpoint, return the other endpoint.
- `ModraUp::Edge#reversed_in?` — Does the edge run in the opposite direction of +start+→+end+ within the face ring? Returns +nil+ if not adjacent.
- `ModraUp::Edge#split` — Split an edge into new edges. The `+position+` is a point on the edge or a parameter (between 0 and 1) along the edge, starting from `{@link #start}`. The original edge remains from the start to the split point; a new edge is returned from the split point to the end.
- `ModraUp::Edge#used_by?` — Does the edge use a given vertex or face.
- `ModraUp::Edge#vertices` — Start and end points.

## `ModraUp::EdgeUse` · `< ModraUp::Entity`

How to use an edge at a certain step on a face. Edges are not independently stored entities but are queried with the face ring. The parent class is {ModraUp::Entity}, not {ModraUp::Drawingelement}.

- `ModraUp::EdgeUse#typename` — typename + "EdgeUse"+.
- `ModraUp::EdgeUse#entityID` — The entity ID within the current session.
- `ModraUp::EdgeUse#persistent_id` — EdgeUse does not have a persistent ID, always +0+ (consistent with SketchUp).
- `ModraUp::EdgeUse#parent` — Parent model or definition.
- `ModraUp::EdgeUse#valid?` — Returns true if the corresponding face loop is still valid.
- `ModraUp::EdgeUse#deleted?` — Opposite of {#valid?}.
- `ModraUp::EdgeUse#attribute_dictionaries` — EdgeUse does not support attribute dictionaries.
- `ModraUp::EdgeUse#attribute_dictionary` — EdgeUse does not support attribute dictionaries.
- `ModraUp::EdgeUse#set_attribute` — EdgeUse does not support attribute dictionaries.
- `ModraUp::EdgeUse#get_attribute` — EdgeUse does not support attribute dictionaries, returns +default+.
- `ModraUp::EdgeUse#delete_attribute` — EdgeUse does not support attribute dictionaries.
- `ModraUp::EdgeUse#edge` — This step uses the edge.
- `ModraUp::EdgeUse#next` — The next step on the ring.
- `ModraUp::EdgeUse#previous` — The previous step on the loop.
- `ModraUp::EdgeUse#reversed?` — Returns whether the edge's v0→v1 direction is reversed relative to the other edge.
- `ModraUp::EdgeUse#face` — The owning face.
- `ModraUp::EdgeUse#loop` — Loop belonging edge.
- `ModraUp::EdgeUse#partners` — Usage of an edge on other faces.
- `ModraUp::EdgeUse#start_vertex_normal` — The normal of the face at the start vertex.
- `ModraUp::EdgeUse#end_vertex_normal` — The normal of the face at the end vertex.

## `ModraUp::Entities`

The edges, faces, groups, component instances, linear dimensions, construction points, and construction lines in a drawing context. Obtain this collection from {ModraUp::Model#entities}, {ModraUp::Model#active_entities}, or {ModraUp::ComponentDefinition#entities}.

- `ModraUp::Entities#add_face` — Create a face from at least three points, or a set of closed coplanar edges / a closed {ModraUp::Curve}. The edges must form a ring; otherwise, it returns +nil+. If creation fails, it also returns +nil+.
- `ModraUp::Entities#add_line` — Add an edge between two points and split any existing coplanar faces. Airborne wireframes must call {ModraUp::Edge#find_faces} to form faces.
- `ModraUp::Entities#add_dimension_linear` — Add a linear dimension. The +offset_vector+ is the parallel offset from the start point to the dimension line.
- `ModraUp::Entities#add_text` — Add an annotation text. The `+point+` is a 3D annotation point (can also be a Vertex or InputPoint), and the `+vector+` is the 3D offset from the annotation point to the text; if omitted, the text is placed directly on the point with no leader. The text always faces the screen.
- `ModraUp::Entities#add_cpoint` — Add an auxiliary point. Not a vertex, does not weld or create an edge.
- `ModraUp::Entities#add_cline` — Add a helper line. Two points define a finite line segment; a point +{Geom::Vector3d}+ defines an infinite line. Repeated points or zero vector return +nil+.
- `ModraUp::Entities#add_3d_text` — Generates 3D text geometry on the XY plane (similar to the "Tools ▸ 3D Text" command). The `+alignment+` parameter is for `TextAlignLeft`, `TextAlignCenter`, or `TextAlignRight`, which only determines the line alignment; the text block origin always remains at the lower left corner. The `+letter_height+` parameter specifies the height of capital letters. When `+is_filled+` is false, only the outline is generated; when `+extrusion+` is non-zero, it extrudes into a solid (only if filled). Returns `true` on success.
- `ModraUp::Entities#add_circle` — Add a circle on a plane (create a closed {ModraUp::ArcCurve} and add a face).
- `ModraUp::Entities#add_edges` — Add edges from a list of line points, joining existing boundaries and splitting coplanar faces, returning the complete edge chain split at intersections. Airborne wireframes must call {ModraUp::Edge#find_faces} to form faces.
- `ModraUp::Entities#add_arc` — Add an open arc (ModraUp::ArcCurve), splitting edges and faces when it intersects with existing coplanar geometry. An isolated open arc does not close to form a face. Angles are specified in radians, rotating from the +xaxis+ around the +normal+.
- `ModraUp::Entities#add_ngon` — Add a regular polygon, where the is_polygon? method returns true.
- `ModraUp::Entities#add_curve` — Create a ModraUp::Curve by adding a polyline from a list of points and weld it together.
- `ModraUp::Entities#add_group` — Create an empty group, or add the entities in this context to a group. If a block is provided, pass the group to the block.
- `ModraUp::Entities#add_instance` — Place a component instance in the current drawing context. Omitting +transform+ uses the unit transformation. A group definition returns a {ModraUp::Group}.
- `ModraUp::Entities#add_faces_from_mesh` — Add faces from a {Geom::PolygonMesh} as polygons. Returns the number of faces successfully added.
- `ModraUp::Entities#fill_from_mesh` — Fills the context with faces from a mesh only if it is empty (batch path). Returns false if there are existing entities. Vertices are always welded, and other parameters are the same as {#add_faces_from_mesh}.
- `ModraUp::Entities#add_observer` — Register a {ModraUp::EntitiesObserver}. Adding the same object a second time will return false. {#add_face} / {#add_line} / {#add_instance} etc. will dispatch an onElementAdded event.
- `ModraUp::Entities#remove_observer` — Remove the observer from the entity collection.
- `ModraUp::Entities#transform_entities` — Transforms vertices, faces, edges, groups, or component instances. Accepts a Selection and returns false for an empty collection. The host snapshots the selection and validates all targets before applying the transformation. Each distinct target is transformed once, in its owning collection. Targets may belong to different collections in the same model. Targets in the active editing context or its ancestors use world coordinates. Other targets use local coordinates. Moving a group or component instance alone leaves its internal geometry and shared definition intact.
- `ModraUp::Entities#intersect_with` — Intersect the geometry with the faces in the receiver's entities and add the resulting edges to +entities1+. Apply +transform1+ to transform the receiver to the common intersection coordinate system; apply +transform2+ to transform the output context to this coordinate system. Write the edges using the inverse transform of +transform2+. If +recurse+ is true, enter nested groups/components. Faces from the same instance and with the same transform will not intersect with themselves or duplicate their existing common boundaries; the source and cutting sets can overlap, and intersections are calculated even between different instances or transforms.
- `ModraUp::Entities#transform_by_vectors` — Applies corresponding translation vectors to each vertex or entity simultaneously. The two arrays must be of equal length.
- `ModraUp::Entities#erase_entities` — Removes drawing elements from their owning collections within the same model, including entities inside nested groups and definitions. The host validates the entire batch before removing anything. Removals across collections form one undo step.
- `ModraUp::Entities#each` — Iterates over live faces, edges, groups, component instances, linear dimensions, construction points, and construction lines. +each+, +grep+, and +to_a+ return the model's live entities. Enumerating the same entity twice returns objects for which +equal?+ is true. Changing their properties or calling +erase!+ modifies the model.
- `ModraUp::Entities#grep` — Fast path: when +klass+ is a known entity class (Face, Edge, Group,
- `ModraUp::Entities#length` — Number of undeleted elements (faces + edges + groups + component instances).
- `ModraUp::Entities#size` — Alias for {#length}.
- `ModraUp::Entities#[]` — Access elements by index, with the order matching that of {#each}. Out-of-bounds access returns +nil+.
- `ModraUp::Entities#at` — Alias for {#[]}.
- `ModraUp::Entities#parent` — The owner of this drawing context: root is {ModraUp::Model}, otherwise it is the {ModraUp::ComponentDefinition} containing it.
- `ModraUp::Entities#model` — The model it belongs to.
- `ModraUp::Entities#clear!` — Clear the edges, faces, groups, instances, and dimensions in the current context.
- `ModraUp::Entities#weld` — Weld edges into a {ModraUp::Curve} that do not have a curve and have connected vertices. Skip edges that already have a curve.
- `ModraUp::Entities#__mu_version` — Internal: The edit count for this group of entities, incremented with each modification. Used by the process to determine if an entity has been modified (via +run_procedures(:if_modified)+). Only meaningful within the current session and not saved with the file.
- `ModraUp::Entities#add_section_plane` — Create a section plane entity without automatically activating it; the coordinates belong to the receiver's drawing context.
- `ModraUp::Entities#active_section_plane` — Query the active section plane in this context.
- `ModraUp::Entities#active_section_plane=` — Sets the active section plane in this context, nil to disable sectioning.

## `ModraUp::EntitiesObserver`

Entities Observer. Registered via {ModraUp::Entities#add_observer}.

- `ModraUp::EntitiesObserver#onElementAdded` — Called after an edge, face, or instance is added.
- `ModraUp::EntitiesObserver#onElementModified` — Called after changes such as transformations, locking, materials, etc. are made.
- `ModraUp::EntitiesObserver#onElementRemoved` — Called when an element is removed. {ModraUp::Drawingelement#erase!} and {ModraUp::Entities#erase_entities} supply the entityID. The viewport eraser dispatches only {#onEraseEntities} because the removal notice carries no per-entity IDs.
- `ModraUp::EntitiesObserver#onEraseEntities` — Called when entities are batch erased. The Ruby {ModraUp::Drawingelement#erase!} method and viewport erasers will dispatch this.
- `ModraUp::EntitiesObserver#onActiveSectionPlaneChanged` — Active section plane changed. The current host does not dispatch this.

## `ModraUp::Entity`

Base class for model objects. Subclasses that can be drawn are {ModraUp::Drawingelement}. {ModraUp::Vertex}, {ModraUp::Loop}, {ModraUp::Curve}, {ModraUp::Material}, and {ModraUp::Layer} are also Entity objects, but not Drawingelements.

- `ModraUp::Entity#typename` — Type name (e.g., +Face+ / +Edge+ / +Group+).
- `ModraUp::Entity#entityID` — Entity ID within the current session: A small integer starting from 1 that increments and remains constant for the lifetime of the entity, unchanged by undo/redo operations. This ID is not preserved when saving the file; it will be renumbered upon reopening the model. For cross-session identification, use {#persistent_id}. Copied entities will receive new IDs.
- `ModraUp::Entity#add_observer` — Register a {ModraUp::EntityObserver}. Adding the same object a second time returns false. Locking, property, and material changes will dispatch an +onChangeEntity+ event.
- `ModraUp::Entity#remove_observer` — Remove the entity observer.
- `ModraUp::Entity#persistent_id` — Number assigned with the model: A unique, incrementing small integer starting from 1 that persists across model saves and reloads, independent of {#entityID}. Copied entities receive new numbers, and deleted entities do not reuse their numbers. Edges, faces, vertices, curves, groups, component instances/definitions, dimensions, leader lines/points, section planes, materials, layers, layer folders, and drawing sheets have assigned numbers; all others (rings, EdgeUses, attribute dictionaries, line types, sets, etc.) return +0+.
- `ModraUp::Entity#parent` — Returns the owner of this drawing context. At the root this is the model. Inside a definition it is the definition itself.
- `ModraUp::Entity#model` — The model it belongs to.
- `ModraUp::Entity#to_s` — String form. Returns "+#<Deleted Entity>+” when the entity has been deleted.
- `ModraUp::Entity#inspect` — Same as {#to_s}.
- `ModraUp::Entity#attribute_dictionaries` — Collection of attribute dictionaries. Returns +nil+ (evaluates to false) if there are no dictionaries.
- `ModraUp::Entity#attribute_dictionary` — Retrieve an attribute dictionary by name. If none exists, return `nil`; if `create` is true, create an empty dictionary. `{ModraUp::Loop}` / `{ModraUp::EdgeUse}` / `{ModraUp::Curve}` always return `nil`.
- `ModraUp::Entity#valid?` — Returns true if the entity is valid, meaning it has not been deleted from the model. Revoked entities are false; even if new geometry is drawn occupying its original position, this object remains an invalid entity (still false). Repeating the action to restore it makes it valid again.
- `ModraUp::Entity#deleted?` — Opposite of {#valid?}.
- `ModraUp::Entity#set_attribute` — Write attribute values. Materials, groups, component instances, faces, and edges are supported. When +dict_name+ and +key+ are Symbols, they are converted to strings. The type of data written is the same type that will be read back.
- `ModraUp::Entity#get_attribute` — Read the attribute. If +dict_name+ and +key+ are Symbols, convert them to strings (similar to SketchUp). If the dictionary or key does not exist, return +default+. The return value type is the same as what is written by {#set_attribute}.
- `ModraUp::Entity#delete_attribute` — Delete a key, or delete the entire dictionary when the key is omitted.

## `ModraUp::EntityObserver`

Single entity observer. Registered with {ModraUp::Entity#add_observer}.

- `ModraUp::EntityObserver#onChangeEntity` — Called when an entity's properties change.
- `ModraUp::EntityObserver#onEraseEntity` — Called when an entity is deleted. Dispatches after {ModraUp::Drawingelement#erase!} succeeds (at which point {ModraUp::Entity#deleted?} is true).

## `ModraUp::EnvironmentsObserver`

Base class for Environment List Observers. Since there are no Environments in this host, subclassing can be used to avoid a NameError.

- `ModraUp::EnvironmentsObserver#onActiveEnvironmentChanged` — Active environment changed. Currently, no dispatch is issued.
- `ModraUp::EnvironmentsObserver#onElementAdded` — Add an environment. Currently, no dispatch is issued.
- `ModraUp::EnvironmentsObserver#onElementRemoved` — Remove environment. Currently, no dispatch is issued.

## `ModraUp::ExtensionsManager`

Collection of {SketchupExtension} objects registered with {ModraUp.register_extension}. Obtain it through {ModraUp.extensions}.

- `ModraUp::ExtensionsManager#[]` — Retrieve an extension by index, name, or {SketchupExtension#id}.
- `ModraUp::ExtensionsManager#keys` — List of extension names.
- `ModraUp::ExtensionsManager#length` — Number of registered extensions.
- `ModraUp::ExtensionsManager#each` — Iterate through registered extensions.

## `ModraUp::Face` · `< ModraUp::Drawingelement`

A planar polygon. Access its front material through the inherited {ModraUp::Drawingelement#material} and {ModraUp::Drawingelement#material=} methods. Use {ModraUp::Face#back_material} and {ModraUp::Face#back_material=} for the back.

- `ModraUp::Face#pushpull` — Push-pull along the face normal. The isolated face remains in the starting plane; the default push-pull moves the vertices of the solid surface, and `copy` set to true retains the starting face.
- `ModraUp::Face#material` — Front material. Inherits from {Drawingelement#material}. Back face material is seen at {Face#back_material}.
- `ModraUp::Face#material=` — Set the face material. Inherited from {Drawingelement#material=}. `nil` clears the material. No need to open the group/component.
- `ModraUp::Face#back_material` — Back material. Only {ModraUp::Face} has this method. If not assigned, it is +nil+.
- `ModraUp::Face#back_material=` — Sets the back material. Only {ModraUp::Face} has this method. +nil+ clears it. No need to open the group/component.
- `ModraUp::Face#all_connected` — Returns the faces and edges connected by edges to this face, including the face itself.
- `ModraUp::Face#area` — Area (in square inches). An optional transformation can be used to calculate the scaled 'visual' area.
- `ModraUp::Face#classify_point` — Determine the position of the point relative to the face. Compare it with constants like {PointInside} instead of hardcoding integers.
- `ModraUp::Face#coplanar_with?` — Whether two faces are coplanar.
- `ModraUp::Face#edges` — Edges surrounding the face (outer ring followed by inner rings, with duplicates removed).
- `ModraUp::Face#followme` — Section plane sweeps along the edge chain. Failure does not modify the model.
- `ModraUp::Face#loops` — The outer loop comes first, followed by the holes.
- `ModraUp::Face#normal` — Normal to the face.
- `ModraUp::Face#outer_loop` — Outer loop.
- `ModraUp::Face#plane` — Plane +[A, B, C, D]+ (Ax + By + Cz + D = 0).
- `ModraUp::Face#reverse!` — Flip the face. Go through a model transaction.
- `ModraUp::Face#vertices` — Vertices surrounding the face (outer ring followed by inner rings, with duplicates removed).
- `ModraUp::Face#mesh` — Triangulate the face into a mesh. +flags+ can be bitwise combined: 1 front UVQ, 2 back UVQ, 4 normal. Omitting flags results in points and triangles; hidden edge point numbers are negative.
- `ModraUp::Face#get_UVHelper` — Returns the helper object for the current UV transformation of the face. When the face has been {ModraUp::TextureWriter#load}ed by a {ModraUp::TextureWriter}, it uses the cached UVs (consistent with the viewport tessellation).
- `ModraUp::Face#position_material` — Pins the material using world and UV point pairs. Supply 2, 4, 6, or 8 {Geom::Point3d} values in +points+, alternating between world and UV coordinates.
- `ModraUp::Face#clear_texture_position` — Clear the texture position and projection for the specified face, restoring the default texture position.
- `ModraUp::Face#clear_texture_projection` — Clears the projection flag and retains the texture positioning.
- `ModraUp::Face#get_texture_projection` — Returns the texture projection direction; returns `nil` if there is no texture projection.
- `ModraUp::Face#texture_projected?` — Returns whether the specified face has a projected texture.
- `ModraUp::Face#texture_positioned?` — Determines whether the texture on the specified face is explicitly positioned.
- `ModraUp::Face#set_texture_projection` — This deprecated interface throws NotImplementedError starting with SketchUp 2021.1; please use the projection parameter of the position_material method.
- `ModraUp::Face#get_glued_instances` — Returns the instances and groups glued to this face in the same drawing context.
- `ModraUp::Face#uv_tile_at` — Returns the four corners of the texture brick surrounding the reference point, alternately in model points and UV points, which can be used for position_material; returns nil if there is no texture.
- `ModraUp::Face::PointUnknown` — {Face#classify_point} cannot be determined.
- `ModraUp::Face::PointInside` — Point inside the face (not on an edge or vertex).
- `ModraUp::Face::PointOnVertex` — The point lies on a face vertex.
- `ModraUp::Face::PointOnEdge` — The point lies on the edge of the face.
- `ModraUp::Face::PointOnFace` — Point on Face (preserve constant; current category is {PointInside} / boundary constant).
- `ModraUp::Face::PointOutside` — Point lies on the face plane but is outside (including within holes).
- `ModraUp::Face::PointNotOnPlane` — The point is not on the plane of the face.

## `ModraUp::FrameChangeObserver`

Scene Transition Observer. Registered via {ModraUp::Pages.add_frame_change_observer}.

- `ModraUp::FrameChangeObserver#frameChange` — Scene change progress. When there is no animation, +percent_done+ is 1.0.

## `ModraUp::Group` · OS3D · `< ModraUp::Drawingelement`

Group instances.

- `ModraUp::Group#definition` — The definition corresponding to the group.
- `ModraUp::Group#name` — Group name. An empty string if unnamed.
- `ModraUp::Group#name=` — Set the name of the group.
- `ModraUp::Group#entities` — Returns the group's drawing context. Editing geometry here first calls {#make_unique}, so other copies retain the shared definition. Editing through {ModraUp::ComponentDefinition#entities} changes all instances of that definition.
- `ModraUp::Group#transformation` — Transformation of a group within its parent drawing context.
- `ModraUp::Group#transformation=` — Sets the transformation of the group within its parent drawing context.
- `ModraUp::Group#transform!` — Apply the transformation by left multiplication.
- `ModraUp::Group#explode` — Explodes the group into its parent drawing context. The parent can be an unclosed group or a definition. Returns false on failure.
- `ModraUp::Group#make_unique` — If any other group shares the same definition, make a unique copy of the definition and point only this group to it. If it is already unique, perform no operation.
- `ModraUp::Group#to_component` — Convert this group into a component instance. Other copies sharing the definition remain groups. The group object is then {#deleted?}. The parent context does not need to be the active drawing context (groups or definitions not in use can be converted, consistent with SketchUp).
- `ModraUp::Group#copy` — Copy this group within the same parent context. The new group has its own definition with identical geometry and instance properties as the source group.
- `ModraUp::Group#scaled_size` — Apply the scaled group definition bounding box size.
- `ModraUp::Group#local_bounds` — Define the group's local bounding box without including the group's transform.
- `ModraUp::Group#add_observer` — Register a {ModraUp::InstanceObserver}. Adding the same object a second time returns false.
- `ModraUp::Group#remove_observer` — Remove the previously registered instance observer.
- `ModraUp::Group#description` — Description of the group definition.
- `ModraUp::Group#description=` — Set the description text for the group definition (same as {ModraUp::ComponentDefinition#description=}).
- `ModraUp::Group#guid` — Base64 unique ID for the group placement. Will be an empty string if not imported.
- `ModraUp::Group#manifold?` — Deprecated: Same as {ModraUp::ComponentDefinition#manifold?}.
- `ModraUp::Group#volume` — Returns the volume in cubic inches. The value is positive for a manifold solid and negative for non-manifold geometry.
- `ModraUp::Group#move!` — Set the transformation without recording it in the undo stack.
- `ModraUp::Group#subtract` — Subtract this group from +other+ (result is +other+ - this group). The result is a new group in the parent context (geometry baked into the parent space, transformed to the identity matrix). Both must be manifold shells in the same parent {ModraUp::Entities}. On success, both are deleted. Returns +nil+ if either is not a manifold shell, the result is empty, one is locked, deleted, or not in the same parent context, with no model change.
- `ModraUp::Group#trim` — Cut the +other+ group with this group. The group remains unchanged; +other+ is replaced by +other+ minus this group, with the result returned as a new group in the same parent context. Failure conditions are the same as for {#subtract}, returning +nil+ without modifying the model.
- `ModraUp::Group#union` — The union of this group with +other+, resulting in a new group in the parent context. Both sides are deleted upon success. Failure conditions are the same as for #{#subtract}.
- `ModraUp::Group#intersect` — The intersection volume between this group and +other+. The result is a new group in the parent context (geometry baked into the parent space). Both entities must be manifold shells in the same parent {ModraUp::Entities}. If successful, both entities are deleted. If they do not intersect, are non-manifold, locked, deleted, or not in the same parent context, it returns +nil+, with the model unchanged.
- `ModraUp::Group#outer_shell` — The outer surface of two manifold shells (volume union, internal faces removed). The result is a new group in the parent context. Both are deleted if successful. Solids do not need to intersect: if they are completely separate, both shells remain in the resulting group; if one completely encloses the other, only the outer shell remains. Failure conditions are the same as for {#intersect}.
- `ModraUp::Group#split` — Splits two manifold solids at their intersection. Returns three new groups on Layer0 in this order: the part of +other+ outside the receiver (Difference2), the part of the receiver outside +other+ (Difference1), and their shared volume (Intersection). The operation removes the original objects. If the volumes do not overlap, the intersection group is empty and the difference groups contain the original solids. For a non-manifold input or a failed operation, returns +nil+ and leaves the model unchanged.
- `ModraUp::Group#show_differences` `OS3D` — Compares the volumes of two manifold solids in their shared parent space. Returns +true+ for equal volumes in the same location, otherwise +false+. Both containers move to Layer0. Coincident faces and edges go on a layer ending in +_same+ and remaining geometry on a layer ending in +_diff+. The prefix is the group instance name (or its definition name if empty), or the component definition name. With +verbose+ enabled, the console lists the centers of differing faces. A non-manifold, locked, deleted, or differently parented input returns +false+ without changing the model. Shared definitions are made unique first, preserving other instances.
- `ModraUp::Group#hatch_pattern` — Read the hatch pattern of this group/component itself. It also applies to nested groups and components, taking precedence over material patterns.
- `ModraUp::Group#hatch_pattern=` — Sets the hatch pattern for this group/component itself, no material assignment needed; nil removes the pattern.

## `ModraUp::HatchPattern` · OS3D · `< ModraUp::Entity`

A hatch pattern in a model (an item of {ModraUp::Model#hatch_patterns}): overlay .PAT line families or tiled images on the fill color, with scaling and rotation. Groups, components, materials, and section planes reference it via +hatch_pattern=+. Cannot be instantiated directly with +new+, instead use {ModraUp::HatchPatterns#add}.

- `ModraUp::HatchPattern#clear_fill_pattern` — Clear the .PAT line pattern definition (the #fill_pattern_file_name will be empty), while preserving the fill color and texture.
- `ModraUp::HatchPattern#clear_fill_texture` — Clear the fill texture, retaining the fill color and .PAT line family.
- `ModraUp::HatchPattern#fill_color` — Retrieve the fill color (the background color beneath lines and patterns).
- `ModraUp::HatchPattern#fill_color=` — Sets the fill color.
- `ModraUp::HatchPattern#fill_pattern_file_name` — The path to the line pattern file (.PAT / .skh / .oskh); an empty string if no line pattern is defined.
- `ModraUp::HatchPattern#fill_texture_file_name` — The path to the texture source file; an empty string if no texture is used.
- `ModraUp::HatchPattern#fill_texture_image` — Returns the image used for texture filling; returns `nil` if no texture is applied.
- `ModraUp::HatchPattern#rotation_angle` — Reads the rotation angle (degrees, counterclockwise).
- `ModraUp::HatchPattern#rotation_angle=` — Sets the rotation angle (degrees).
- `ModraUp::HatchPattern#save_fill_pattern_to_file` — Write the .PAT hatch pattern as an AutoCAD .PAT text file (excluding fill color, scale, and texture; use {ModraUp::HatchPattern#write} for the entire pattern).
- `ModraUp::HatchPattern#set_fill_pattern_from_file` — Read hatch patterns from a file. Only the first pattern in the file is used; also accepts line patterns from .skh / .oskh files.
- `ModraUp::HatchPattern#set_fill_texture_image_and_file_name` — Set fill texture: The image and its source path are saved. The new texture initially tiles 12 inches wide, then scaled by {#uv_scale}.
- `ModraUp::HatchPattern#set_uv_scale` — Sets the repeat scale in the U/V directions (pattern units × scale = model inches).
- `ModraUp::HatchPattern#uv_scale` — Retrieve the U/V repetition scale.
- `ModraUp::HatchPattern#name` — Read name (unique within the model).
- `ModraUp::HatchPattern#name=` — Rename. The name cannot be empty and must be unique and not conflict with other hatch patterns in the model.
- `ModraUp::HatchPattern#thumbnail_image` — Returns the thumbnail preview image (128×128) displayed in the thumbnail tray.
- `ModraUp::HatchPattern#write` `OS3D` — Write the entire hatch pattern (name, source, fill color, line family or texture, scale, rotation) to a file.

## `ModraUp::HatchPatternData`

Values for hatch patterns that do not belong to a model collection and have no name, used for {ModraUp::RenderingOptions#hatch_pattern} (the default hatch pattern for styles). The object obtained from the rendering options is frozen: first +dup+, modify it, and then assign it back.

- `ModraUp::HatchPatternData#initialize` — Create an empty hatch pattern settings: white fill, no line family and texture, scale 1, rotation 0.
- `ModraUp::HatchPatternData#initialize_copy` — Copy all settings (use +dup+ / +clone+).
- `ModraUp::HatchPatternData#==` — Returns true if all settings are the same.
- `ModraUp::HatchPatternData#clear_fill_pattern` — Clear the .PAT line pattern definition (the #fill_pattern_file_name will be empty), while preserving the fill color and texture.
- `ModraUp::HatchPatternData#clear_fill_texture` — Clear the fill texture, retaining the fill color and .PAT line family.
- `ModraUp::HatchPatternData#fill_color` — Retrieve the fill color (the background color beneath lines and patterns).
- `ModraUp::HatchPatternData#fill_color=` — Sets the fill color.
- `ModraUp::HatchPatternData#fill_pattern_file_name` — The path to the line pattern file (.PAT / .skh / .oskh); an empty string if no line pattern is defined.
- `ModraUp::HatchPatternData#fill_texture_file_name` — The path to the texture source file; an empty string if no texture is used.
- `ModraUp::HatchPatternData#fill_texture_image` — Returns the image used for texture filling; returns `nil` if no texture is applied.
- `ModraUp::HatchPatternData#rotation_angle` — Reads the rotation angle (degrees, counterclockwise).
- `ModraUp::HatchPatternData#rotation_angle=` — Sets the rotation angle (degrees).
- `ModraUp::HatchPatternData#save_fill_pattern_to_file` — Write the .PAT hatch pattern as an AutoCAD .PAT text file (excluding fill color, scale, and texture; use {ModraUp::HatchPattern#write} for the entire pattern).
- `ModraUp::HatchPatternData#set_fill_pattern_from_file` — Read hatch patterns from a file. Only the first pattern in the file is used; also accepts line patterns from .skh / .oskh files.
- `ModraUp::HatchPatternData#set_fill_texture_image_and_file_name` — Set fill texture: The image and its source path are saved. The new texture initially tiles 12 inches wide, then scaled by {#uv_scale}.
- `ModraUp::HatchPatternData#set_uv_scale` — Sets the repeat scale in the U/V directions (pattern units × scale = model inches).
- `ModraUp::HatchPatternData#uv_scale` — Retrieve the U/V repetition scale.

## `ModraUp::HatchPatterns` · `< ModraUp::Entity`

A collection of all hatch patterns in the model, obtained from {ModraUp::Model#hatch_patterns}.

- `ModraUp::HatchPatterns#[]` — Retrieve hatch patterns by index or name; return nil if not found.
- `ModraUp::HatchPatterns#add` — Read a new hatch pattern from a file and add it to the model.
- `ModraUp::HatchPatterns#each` — Iterate through each hatch pattern.
- `ModraUp::HatchPatterns#purge_unused` — Delete hatch patterns that are not used by any group, component, material, or section plane.
- `ModraUp::HatchPatterns#remove` — Remove hatching patterns from the model; any groups, components, materials, or section planes referencing it will no longer display it (undo can restore).
- `ModraUp::HatchPatterns#selected_hatch_pattern` — The currently selected hatch pattern (the current item in the HatchPatterns palette).
- `ModraUp::HatchPatterns#selected_hatch_pattern=` — Sets the current selected hatch pattern; nil unselects the pattern.
- `ModraUp::HatchPatterns#size` — Number of patterns.
- `ModraUp::HatchPatterns#length` — Alias for {#size}.

## `ModraUp::Http`

Asynchronous HTTP(S) client. The plugin uses {ModraUp::Http::Request} to send requests and avoids relying solely on +Net::HTTP+.

- `ModraUp::Http::GET` — HTTP GET。
- `ModraUp::Http::POST` — HTTP POST。
- `ModraUp::Http::PUT` — HTTP PUT。
- `ModraUp::Http::DELETE` — HTTP DELETE。
- `ModraUp::Http::HEAD` — HTTP HEAD。
- `ModraUp::Http::OPTIONS` — HTTP OPTIONS。
- `ModraUp::Http::PATCH` — HTTP PATCH。
- `ModraUp::Http::STATUS_UNKNOWN` — It has not {ModraUp::Http::Request#start} yet.
- `ModraUp::Http::STATUS_SUCCESS` — Request completed (HTTP response received; see {ModraUp::Http::Response#status_code}).
- `ModraUp::Http::STATUS_PENDING` — Pending {ModraUp::Http::Request#start} has not completed yet.
- `ModraUp::Http::STATUS_CANCELED` — The request has been {ModraUp::Http::Request#cancel}.
- `ModraUp::Http::STATUS_FAILED` — Transmission failed (due to connection issues, timeouts, etc.).

## `ModraUp::Http::Request` · OS3D

Asynchronous HTTP request. {Request#start} takes an optional block that is called in the Ruby thread after completion.

- `ModraUp::Http::Request#initialize` — The default port is 80; other ports should be specified in the +url+. The +method+ can be a custom verb or {ModraUp::Http::GET} / {POST} / {PUT} / {DELETE} / {HEAD} / {OPTIONS} / {PATCH}.
- `ModraUp::Http::Request#url` — Copy the URL request.
- `ModraUp::Http::Request#body` — The body of the request to be sent.
- `ModraUp::Http::Request#body=` — Set the request body.
- `ModraUp::Http::Request#headers` — The headers to be sent in the request.
- `ModraUp::Http::Request#headers=` — Set the request headers. Keys will be +to_s+.
- `ModraUp::Http::Request#method` — The HTTP method to be used. This will override +Object#method+.
- `ModraUp::Http::Request#method=` — Set the HTTP method.
- `ModraUp::Http::Request#status` — Internal status: {ModraUp::Http::STATUS_UNKNOWN} / {STATUS_SUCCESS} / {STATUS_PENDING} / {STATUS_CANCELED} / {STATUS_FAILED}.
- `ModraUp::Http::Request#cancel` — Cancel the request. Do not call within the completion callback.
- `ModraUp::Http::Request#set_download_progress_callback` — Download progress. If the server does not provide a length, +total+ is set to -1.
- `ModraUp::Http::Request#set_upload_progress_callback` — Upload progress.
- `ModraUp::Http::Request#start` — Start the request. Returns false if already in progress or URL is empty. Do not call {#cancel} from the callback.

## `ModraUp::Http::Response`

Server response. Only within the block passed to {ModraUp::Http::Request#start} will the response be available in the callback. Do not call {ModraUp::Http::Request#cancel} within the callback.

- `ModraUp::Http::Response#body` — Response body. Encoding is determined by the charset in +Content-Type+; otherwise, it defaults to +Encoding::ASCII_8BIT+.
- `ModraUp::Http::Response#headers` — Headers returned by the server.
- `ModraUp::Http::Response#status_code` — HTTP status code (rfc2616).

## `ModraUp::Image` · OS3D · `< ModraUp::Drawingelement`

Image entities attached to faces (not {ModraUp::ImageRep}). Cannot be directly instantiated with +new+.


## `ModraUp::ImageRep`

Pixel buffer. From file {#load_file} or {#new}(path), or {#set_data} with RGB(A) bytes.

- `ModraUp::ImageRep#initialize` — Initialize with an empty buffer or decode a PNG/JPEG from a path.
- `ModraUp::ImageRep#load_file` — Fill pixels from PNG/JPEG.
- `ModraUp::ImageRep#save_file` — Write as PNG or JPEG. The extension determines the format; JPEG accepts +quality+ (0–100) or a hash +:quality+.
- `ModraUp::ImageRep#width` — Pixel width. An empty buffer is +0+.
- `ModraUp::ImageRep#height` — Pixel height. Empty buffer is +0+.
- `ModraUp::ImageRep#bits_per_pixel` — Bits per pixel: +8+ / +24+ / +32+. Empty buffer: +0+.
- `ModraUp::ImageRep#row_padding` — Number of bytes to fill at the end of each row.
- `ModraUp::ImageRep#size` — The number of bytes in {#data}.
- `ModraUp::ImageRep#data` — Pixel bytes (ASCII-8BIT). An empty buffer is +nil+. Byte order is RGB(A).
- `ModraUp::ImageRep#set_data` — Replace the buffer with original pixels. `bits_per_pixel` is `8` / `24` / `32`.
- `ModraUp::ImageRep#color_at_uv` — Samples the color at UV coordinates.+(0,0)+ is the bottom-left, and +(1,1)+ is the top-right. A nil buffer returns +nil+.
- `ModraUp::ImageRep#colors` — Each pixel a {ModraUp::Color}, row-major order (top to bottom). An empty buffer is +nil+.

## `ModraUp::Importer`

Custom importer base class. Subclasses must implement {#description}, {#file_extension}, {#id}, {#load_file}, and register with {ModraUp.register_importer}. Doing so will appear as a filter in the import dialog box.

- `ModraUp::Importer#description` — Display the filter description in the dialog box.
- `ModraUp::Importer#id` — Importer identifier.
- `ModraUp::Importer#file_extension` — File extensions that do not contain points, such as {+obj+}.
- `ModraUp::Importer#supports_options?` — Does the option dialog box have an option? Defaults to +false+.
- `ModraUp::Importer#do_options` — Pop up import options. Default is an empty operation.
- `ModraUp::Importer#load_file` — Read in +path+. Returns {ImportSuccess} status, etc. The base class returns {ImportFail}.
- `ModraUp::Importer::ImportSuccess` — Import success.
- `ModraUp::Importer::ImportFail` — Import failed.
- `ModraUp::Importer::ImportCanceled` — The user canceled.
- `ModraUp::Importer::ImportFileNotFound` — The file does not exist.

## `ModraUp::InputPoint`

Infers the pick point. Writes the position and snap type to {ModraUp::View#inputpoint} or {InputPoint#pick}. Returns the entity (including nested instances) associated with the pick position for {#vertex} / {#edge} / {#face}.

- `ModraUp::InputPoint#==` — Compare the positions of two input points, infer their types, and determine their geometric sources.
- `ModraUp::InputPoint#transformation` — Transformation from local coordinates of picked entities to model coordinates; returns an identity transformation for the root level.
- `ModraUp::InputPoint#instance_path` — Returns an independent copy of the current pick instance path; returns nil if there is no associated entity.
- `ModraUp::InputPoint#initialize` — Initialize an empty input point, or attach the endpoint to a model point.
- `ModraUp::InputPoint#pick` — Infers a pick from screen coordinates; returns true only if a valid and changed entity is picked.
- `ModraUp::InputPoint#position` — Model space position.
- `ModraUp::InputPoint#valid?` — Returns whether the pick found a snap point.
- `ModraUp::InputPoint#display?` — Should the inference mark be displayed.
- `ModraUp::InputPoint#degrees_of_freedom` — Remaining degrees of freedom: endpoint 0, line 1, face 2, not picked 3.
- `ModraUp::InputPoint#tooltip` — Adhesion types in English tooltips (Endpoint / On Face, etc.).
- `ModraUp::InputPoint#depth` — Provides the depth of the instance nested within the entity that contains the picked location.
- `ModraUp::InputPoint#vertex` — Pick the associated vertex.
- `ModraUp::InputPoint#edge` — Pick the associated edge.
- `ModraUp::InputPoint#face` — Pick the associated face.
- `ModraUp::InputPoint#clear` — Clears the pick results.
- `ModraUp::InputPoint#copy!` — Duplicates another input point.
- `ModraUp::InputPoint#draw` — Draw a crosshair in {ModraUp::Tool#draw}.

## `ModraUp::InstanceObserver`

Observer for instance of a group or component. Registered with {ModraUp::ComponentInstance#add_observer} or {ModraUp::Group#add_observer}, it calls +onOpen+ when double-clicked to enter edit mode, and +onClose+ when exiting edit mode.

- `ModraUp::InstanceObserver#onOpen` — Called when the group/component is double-clicked to enter its edit mode.
- `ModraUp::InstanceObserver#onClose` — Called when exiting the group/component edit mode or returning to the previous layer.

## `ModraUp::InstancePath`

The instance path from the model root to the picked entity. Holds a list of independent entities, supporting Enumerable.

- `ModraUp::InstancePath#initialize`
- `ModraUp::InstancePath#to_a`
- `ModraUp::InstancePath#size`
- `ModraUp::InstancePath#length`
- `ModraUp::InstancePath#empty?`
- `ModraUp::InstancePath#valid?`
- `ModraUp::InstancePath#[]`
- `ModraUp::InstancePath#root`
- `ModraUp::InstancePath#leaf`
- `ModraUp::InstancePath#==`
- `ModraUp::InstancePath#include?`
- `ModraUp::InstancePath#each`
- `ModraUp::InstancePath#transformation`
- `ModraUp::InstancePath#persistent_id_path`
- `ModraUp::InstancePath#clear`
- `ModraUp::InstancePath#copy`
- `ModraUp::InstancePath#push`
- `ModraUp::InstancePath#pop`
- `ModraUp::InstancePath#leaf=`

## `ModraUp::Layer` · `< ModraUp::Entity`

Layers (Product Name: Tag). The API name remains Layer.

- `ModraUp::Layer#name` — Layer name. Defaults to +"Layer0"+.
- `ModraUp::Layer#line_style` — Layer line style. Defaults to +nil+ (viewport lines as solid).
- `ModraUp::Layer#line_style=` — Sets the layer line style. +nil+ restores the default solid line. Viewport edges use this dash pattern.
- `ModraUp::Layer#name=` — Set the layer name. Append a number if the name is duplicated. Cannot change {#name} to the default layer +"Layer0"+.
- `ModraUp::Layer#display_name` — Display name for the interface. Layer0 displays as +"Untagged"+, while the rest are the same as {#name}.
- `ModraUp::Layer#color` — Layer Color (used when coloring by Tag).
- `ModraUp::Layer#color=` — Sets the layer color.
- `ModraUp::Layer#visible?` — Returns whether the layer is visible. Hidden layers do not draw their entities in the viewport.
- `ModraUp::Layer#visible=` — Sets the layer visibility.
- `ModraUp::Layer#folder` — Layer folder it belongs to. Directly attached to the layer table results in +nil+.
- `ModraUp::Layer#folder=` — Place layers into a folder. +nil+ returns to the root of the layer table. Layer0 cannot be placed into a folder.
- `ModraUp::Layer#page_behavior` — Flags indicating the visibility of a new scene relative to the default scene. Can be set using +LAYER_VISIBLE_BY_DEFAULT+, +LAYER_HIDDEN_BY_DEFAULT+, +LAYER_IS_VISIBLE_ON_NEW_PAGES+, or +LAYER_IS_HIDDEN_ON_NEW_PAGES+.
- `ModraUp::Layer#page_behavior=` — Set the visibility flag for the scene.
- `ModraUp::Layer#==` — Two elements in the same model belong to the same layer if they are true.
- `ModraUp::Layer#<=>` — Compare by {#name} for use with +sort+.

## `ModraUp::LayerFolder` · `< ModraUp::Entity`

Layer Folder (SketchUp 2021+). Names can be duplicated.

- `ModraUp::LayerFolder#name` — Folder name.
- `ModraUp::LayerFolder#name=` — Set the folder name. It cannot be empty. Can be {ModraUp.undo}.
- `ModraUp::LayerFolder#==` — Returns true if the folders are the same within the same model file.
- `ModraUp::LayerFolder#<=>` — Compare by {#name}. Returns +nil+ if not a {ModraUp::LayerFolder}.
- `ModraUp::LayerFolder#folder` — Parent folder. The root folder is indicated by +nil+.
- `ModraUp::LayerFolder#folder=` — Set the parent folder. +nil+ returns to the root of the layer table.
- `ModraUp::LayerFolder#add_folder` — Create new subfolders within this folder or move existing folders into it.
- `ModraUp::LayerFolder#add_layer` — Add the layer to this folder.
- `ModraUp::LayerFolder#remove_layer` — Move the layer from this folder to the root layer table.
- `ModraUp::LayerFolder#remove_folder` — Remove direct subfolders. Subcontent is promoted one level up.
- `ModraUp::LayerFolder#folders` — Direct subfolders.
- `ModraUp::LayerFolder#layers` — Layers in this folder.
- `ModraUp::LayerFolder#count_folders` — The number of direct subfolders.
- `ModraUp::LayerFolder#count_layers` — The number of layers in this folder.
- `ModraUp::LayerFolder#each_folder` — Iterate through direct subfolders.
- `ModraUp::LayerFolder#each_layer` — Iterate through the layers in this folder.
- `ModraUp::LayerFolder#visible?` — Returns whether the folder is visible.
- `ModraUp::LayerFolder#visible=` — Sets the folder visibility. If it contains the current layer, hiding will fail without raising an error.
- `ModraUp::LayerFolder#visible_on_new_pages?` — Whether the folder is displayed by default when a new scene is created.
- `ModraUp::LayerFolder#visible_on_new_pages=` — Sets whether the folder is displayed by default when a new scene is created. Can be {ModraUp.undo}.

## `ModraUp::Layers` · `< ModraUp::Entity`

Model layer table. Obtain it from {ModraUp::Model#layers}. Index 0 is the default +"Layer0"+.

- `ModraUp::Layers#add` — Add a layer. If a layer with the same name already exists, return the existing object. If the name is omitted, use {#unique_name} (base name + "Tag").
- `ModraUp::Layers#add_folder` — Create a folder under the root of the Layers table, or move an existing folder to the root. Folder names can be duplicated, but they must not be empty.
- `ModraUp::Layers#remove` — Remove layers. Cannot delete Layer0. Geometry defaults to being attached to Layer0; if +remove_geometry+ is true, edges and faces on the layer are deleted.
- `ModraUp::Layers#remove_folder` — Remove the folder from the root of the layers table. The sub-content moves up one level.
- `ModraUp::Layers#purge_unused` — Remove layers that are not referenced by any geometry and are not the current layer.
- `ModraUp::Layers#[]` — Retrieve a layer by name or index. Returns `nil` if not found.
- `ModraUp::Layers#size` — The number of layers (including the default Layer0).
- `ModraUp::Layers#each` — Iterate through layers.
- `ModraUp::Layers#each_layer` — Iterate through the layers that are not in the folder.
- `ModraUp::Layers#layers` — Layers not in the folder.
- `ModraUp::Layers#count_layers` — The number of layers not in the folder.
- `ModraUp::Layers#folders` — Direct subfolders under the root of the Layers table.
- `ModraUp::Layers#count_folders` — Number of folders directly under the root.
- `ModraUp::Layers#each_folder` — Iterate through direct subfolders.
- `ModraUp::Layers#purge_unused_folders` — Remove empty folders that have no subfolders or layers.
- `ModraUp::Layers#unique_name` — Returns a unique name that is not yet in use in the table. Omit the base name and it will use +"Tag"+ (since SketchUp 2020).
- `ModraUp::Layers#parent` — The model it belongs to.
- `ModraUp::Layers#add_observer` — Register a {ModraUp::LayersObserver}. Adding the same object a second time returns false.
- `ModraUp::Layers#remove_observer` — Remove layer table observers.

## `ModraUp::LayersObserver` · OS3D

Layers Table Observer. Registered via {ModraUp::Layers#add_observer}.

- `ModraUp::LayersObserver#onLayerAdded` — Called after {ModraUp::Layers#add}.
- `ModraUp::LayersObserver#onLayerRemoved` — Layer removal. Called after {ModraUp::Layers#remove} / {ModraUp::Layers#purge_unused}.
- `ModraUp::LayersObserver#onLayerChanged` — Layer properties changed. Called after {ModraUp::Layer#line_style=}.
- `ModraUp::LayersObserver#onCurrentLayerChanged` — Layer change detected. Called after {ModraUp::Model#active_layer=}.
- `ModraUp::LayersObserver#onRemoveAllLayers` — Empty the layer table. Currently, no signals are dispatched.
- `ModraUp::LayersObserver#onLayerFolderAdded` — Layer folder created. Called after {ModraUp::Layers#add_folder}.
- `ModraUp::LayersObserver#onLayerFolderChanged` — Layer folder properties or parent-child relationships have changed.
- `ModraUp::LayersObserver#onLayerFolderRemoved` — Layer folder removed. Called after {ModraUp::Layers#remove_folder}.
- `ModraUp::LayersObserver#onParentFolderChanged` — The layer's parent folder has changed. Pass in the label that has changed its parent, not the folder.
- `ModraUp::LayersObserver#onLayerFolderCreated` `OS3D` — Legacy folder notification compatibility entry point. Forwarded by default implementation when official callback is not rewritten.
- `ModraUp::LayersObserver#onLayerFolderDeleted` `OS3D` — Legacy folder notification compatibility entry point. Forwarded by default implementation when official callback is not rewritten.

## `ModraUp::Licensing` · OS3D

Extended License. This host does not have Trimble Extension Warehouse access and is considered licensed.

- `ModraUp::Licensing.licensed?` `OS3D` — The host is always +true+.
- `ModraUp::Licensing.get_extension_license` — Query extension authorization. Any +ext_id+ returns the authorized object.
- `ModraUp::Licensing::LICENSED` — ModraUp::Licensing::LICENSED = 0
- `ModraUp::Licensing::EXPIRED` — ModraUp::Licensing::EXPIRED = 1
- `ModraUp::Licensing::TRIAL` — ModraUp::Licensing::TRIAL = 2
- `ModraUp::Licensing::TRIAL_EXPIRED` — ModraUp::Licensing::TRIAL_EXPIRED = 3
- `ModraUp::Licensing::NOT_LICENSED` — ModraUp::Licensing::NOT_LICENSED = 4

## `ModraUp::Licensing::ExtensionLicense`

An extended authorization status. Returned by {ModraUp::Licensing.get_extension_license}.

- `ModraUp::Licensing::ExtensionLicense#licensed?` — Returns whether the extension is authorized. The host is always true.
- `ModraUp::Licensing::ExtensionLicense#days_remaining` — Days remaining. Permanent license is +0+.
- `ModraUp::Licensing::ExtensionLicense#state` — {ModraUp::Licensing::LICENSED} and other status codes. This host is always licensed.
- `ModraUp::Licensing::ExtensionLicense#error_description` — Failure description. Is an empty string when authorized.

## `ModraUp::LineStyle` · `< ModraUp::Entity`

An built-in line style (solid, dashed, etc.). Cannot be newly created.

- `ModraUp::LineStyle#name` — Line style name in English, such as +"Dash"+ or +"Solid Basic"+.

## `ModraUp::LineStyles` · `< ModraUp::Entity`

Built-in line styles for the model. Retrieve them by name or index using {ModraUp::LineStyle}.

- `ModraUp::LineStyles#[]` — Retrieve line styles by their English name or index starting from 0. Return nil if the name does not exist.
- `ModraUp::LineStyles#at` — Alias for {#[]}.
- `ModraUp::LineStyles#names` — 12 built-in English names.
- `ModraUp::LineStyles#size` — Number of built-in line styles.
- `ModraUp::LineStyles#length` — Alias for {#size}.
- `ModraUp::LineStyles#each` — Iterate through all built-in line styles.
- `ModraUp::LineStyles#to_a` — All line styles.

## `ModraUp::LoadHandler`

Progress and result callback protocol for {ModraUp::DefinitionList#load_from_url}. The official documentation describes it as:

- `ModraUp::LoadHandler#cancelled?` — Repeatedly prompts during the download. Returns true to cancel, then calls {#onFailure}.
- `ModraUp::LoadHandler#onPercentChange` — Download progress. +percent+ ranges from approximately 0 to 100.
- `ModraUp::LoadHandler#onSuccess` — The SKP definition table has been loaded.
- `ModraUp::LoadHandler#onFailure` — Cancel, network error, or not a valid SKP.

## `ModraUp::LocalExtensionManager` · OS3D

The underlying interface used by the host "Extension Manager" dialog: read the list of installed native extensions, uninstall them, and save preferences. Plugins should use {ModraUp.extensions} and {SketchupExtension} instead of relying on this module.

- `ModraUp::LocalExtensionManager.startup_states` `OS3D` — Returns an independent copy of the extension and entry script enable states for use in startup policies and management.
- `ModraUp::LocalExtensionManager.save_preferences` `OS3D` — Write back the modified preferences (including extension enabled status) to the preference file immediately, performing an atomic replacement of the entire file.
- `ModraUp::LocalExtensionManager.inventory_json` `OS3D` — A JSON array listing installed extensions in the Plugins directory, with each item containing +id+, +name+, +loaders+ (top-level entry scripts, relative to the Plugins directory), +removable+, and +reason+ explaining why it cannot be uninstalled. When there is no host, it is +"[]"+.
- `ModraUp::LocalExtensionManager.uninstall` `OS3D` — Remove the files of an installed extension package based on the +id+ from {inventory_json}. The loaded code will only disappear after a restart.

## `ModraUp::Loop` · `< ModraUp::Entity`

An ordered loop of edges bounding a face. Each face has one outer loop and one inner loop for each hole. {ModraUp::Loop#edgeuses} returns the {ModraUp::EdgeUse} objects around the loop. Inherits from {ModraUp::Entity}.

- `ModraUp::Loop#typename` — typename + "Loop".
- `ModraUp::Loop#entityID` — The loop entity ID within the current session.
- `ModraUp::Loop#persistent_id` — Loops do not have persistent IDs and always have +0+ (consistent with SketchUp).
- `ModraUp::Loop#parent` — The owner in the drawing context.
- `ModraUp::Loop#valid?` — Returns true if the face still exists.
- `ModraUp::Loop#deleted?` — Opposite of {#valid?}.
- `ModraUp::Loop#attribute_dictionaries` — Loops do not have attribute dictionaries.
- `ModraUp::Loop#attribute_dictionary` — Loops cannot have attribute dictionaries.
- `ModraUp::Loop#set_attribute` — Loops do not support attribute dictionaries.
- `ModraUp::Loop#get_attribute` — The loop does not have any attributes, so it returns the default value.
- `ModraUp::Loop#delete_attribute` — Edges have no attributes to delete.
- `ModraUp::Loop#convex?` — Checks if the loop is convex.
- `ModraUp::Loop#edges` — Edges in the order of the loop.
- `ModraUp::Loop#face` — The face to which the loop belongs.
- `ModraUp::Loop#outer?` — Returns true if the loop is an outer loop.
- `ModraUp::Loop#vertices` — Vertices in the order of the loop.
- `ModraUp::Loop#edgeuses` — Edge uses in the order of the loop.

## `ModraUp::Material` · OS3D · `< ModraUp::Entity`

A material: name, color, transparency, and an optional texture. The parent class is {ModraUp::Entity}, not a Drawingelement. Textured shading is done using {#colorize_type} ({COLORIZE_SHIFT} / {COLORIZE_TINT}).

- `ModraUp::Material#hatch_pattern` — Read the hatch pattern of the material: returns the section fill pattern used for sections of groups and components (including nested content that inherits this material).
- `ModraUp::Material#hatch_pattern=` — Sets the material's hatch pattern; nil removes the pattern.
- `ModraUp::Material#name` — Internal unique name. Interface display uses {#display_name}.
- `ModraUp::Material#name=` — Rename. Throws an error if the name already exists for another material.
- `ModraUp::Material#display_name` — Display name. Remove square brackets when the name is in the format +[Joe]+.
- `ModraUp::Material#write_thumbnail` — Write the material's color or texture thumbnail to an image file while maintaining the aspect ratio.
- `ModraUp::Material#color` — Material color.
- `ModraUp::Material#color=` `OS3D` — Set the color. Accepts {ModraUp::Color} or +[r, g, b]+ (0–255).
- `ModraUp::Material#alpha` — Opacity, 0.0–1.0.
- `ModraUp::Material#alpha=` — Set opacity, values outside the 0–1 range will be clamped.
- `ModraUp::Material#use_alpha?` `OS3D` — Returns true if the material's opacity is less than 1.
- `ModraUp::Material#texture` — Texture. Returns nil if no texture is set.
- `ModraUp::Material#texture=` `OS3D` — Set the texture. `nil` clears it. The path reads in raw bytes; the default tile size is 10x10 inches. The array format is `[filename, width, height]`.
- `ModraUp::Material#materialType` — +MATERIAL_SOLID+ / +MATERIAL_TEXTURED+ / +MATERIAL_COLORIZED_TEXTURED+。
- `ModraUp::Material#colorize_type` — +COLORIZE_SHIFT+ or +COLORIZE_TINT+. Readable even without a texture; defaults to SHIFT.
- `ModraUp::Material#colorize_type=` — Sets the coloring method. Only accepts {COLORIZE_SHIFT} / {COLORIZE_TINT}.
- `ModraUp::Material#colorize_deltas` — HLS delta from texture average color to material color: hue (degrees), saturation, lightness. Returns [0, 0, 0] when there is no texture or the pixels cannot be solved.
- `ModraUp::Material#==` — Returns true if the same model and slot are identical.
- `ModraUp::Material::MATERIAL_SOLID` — MATERIAL_SOLID = 0
- `ModraUp::Material::MATERIAL_TEXTURED` — MATERIAL_TEXTURED = 1
- `ModraUp::Material::MATERIAL_COLORIZED_TEXTURED` — MATERIAL_COLORIZED_TEXTURED = 2
- `ModraUp::Material::COLORIZE_SHIFT` — COLORIZE_SHIFT = 0
- `ModraUp::Material::COLORIZE_TINT` — COLORIZE_TINT = 1

## `ModraUp::Materials` · OS3D · `< ModraUp::Entity`

Collection of model materials. Obtain from {ModraUp::Model#materials}.

- `ModraUp::Materials#add` — Add materials. When a name is duplicated, append a number (e.g., +Joe+ / +Joe1+). If no name is provided, use +Material+ / +Material1+.
- `ModraUp::Materials#[]` — Retrieve a material by name or its 0-based index. If not found, return `nil`.
- `ModraUp::Materials#at` — Alias for {#[]}.
- `ModraUp::Materials#size` — The number of materials that have not been deleted.
- `ModraUp::Materials#length` — Alias for {#size}.
- `ModraUp::Materials#each` — Iterate over the undeleted materials.
- `ModraUp::Materials#unique_name` — Returns a unique name that is not yet in use. If the base name is already in use, it appends a number to it.
- `ModraUp::Materials#remove` — Remove the material and clear any references from the geometry.
- `ModraUp::Materials#purge_unused` — Remove materials unused by live geometry and retained definitions.
- `ModraUp::Materials#current` `OS3D` — The current paint bucket material. Returns +nil+ if no material is selected.
- `ModraUp::Materials#current=` — Sets the material used by the paint bucket. Use +nil+ for the default material.
- `ModraUp::Materials#add_observer` — Register a {ModraUp::MaterialsObserver}. Adding the same object a second time returns +false+.
- `ModraUp::Materials#remove_observer` — Remove material table observers.

## `ModraUp::MaterialsObserver`

Materials Observer. Registered via {ModraUp::Materials#add_observer}.

- `ModraUp::MaterialsObserver#onMaterialAdd` — Called after {ModraUp::Materials#add}.
- `ModraUp::MaterialsObserver#onMaterialRemove` — Called after {ModraUp::Materials#remove}.
- `ModraUp::MaterialsObserver#onMaterialChange` — Called when the material name, color, transparency, or texture changes.
- `ModraUp::MaterialsObserver#onMaterialSetCurrent` — Call {ModraUp::Materials#current=} after.
- `ModraUp::MaterialsObserver#onMaterialRefChange` — Called when the material is referenced by geometry (e.g., a face is assigned a material).
- `ModraUp::MaterialsObserver#onMaterialUndoRedo` — Material undo/redo. Currently, individual dispatches do not occur (the transaction observer handles this first).

## `ModraUp::Menu`

Top-level menus or submenus. Obtain them using {UI.menu} or {#add_submenu}.

- `ModraUp::Menu#add_item` — Add an item. The string title must be in a block; alternatively, you can pass {UI::Command}.
- `ModraUp::Menu#add_separator` — Add a separator to the menu.
- `ModraUp::Menu#add_submenu` — Add a sub-menu and return it. The top bar is available in both the context menu as defined by {UI.add_context_menu_handler} and the right-click menu.
- `ModraUp::Menu#set_validation_proc` — Set a validation block for the id returned by {#add_item}, which should return values like {MF_ENABLED}.

## `ModraUp::Model` · OS3D

An open model document. Obtain it from {ModraUp.active_model}. Direct construction with +Model.new+ is unsupported.

- `ModraUp::Model#hatch_patterns` — Returns the collection of hatch patterns in the model.
- `ModraUp::Model#entities` — Root drawing context of the model.
- `ModraUp::Model#active_entities` — The current editing context (different from {#entities} after grouping).
- `ModraUp::Model#active_view` — Current viewport. Repeated calls return a new wrapper pointing to the same camera and overlay state within the same model.
- `ModraUp::Model#axes` — The current drawing coordinate axis changes with the group or component being edited.
- `ModraUp::Model#active_path` — The active path in the group or component. Returns +nil+ when editing at the root context.
- `ModraUp::Model#active_path=` — Open a group/component path for editing. +nil+ or an empty array returns to the root context. The path must be a layer-by-layer sequence of live {ModraUp::Group} / {ModraUp::ComponentInstance} starting from the model root.
- `ModraUp::Model#close_active` — Exit the currently active group/component layer. Returns +false+ if already at the root context.
- `ModraUp::Model#close` — Close the document tab containing the model (not necessarily the current document). If +ignore_changes+ is false and the model has unsaved modifications, prompt to save; canceling keeps the document open. Closing the last document creates a new host document based on a template. After closing, the old Model and its entity objects are no longer accessible. Closing the current model without a host is equivalent to File > New.
- `ModraUp::Model#selection` — Current selection set. Repeatedly calling it on the same model returns the same wrapper object.
- `ModraUp::Model#tools` — The tool manager for the current model.
- `ModraUp::Model#select_tool` — Activates a custom Ruby tool; +nil+ returns to the select tool. Protocol follows {ModraUp::Tool}: any object that implements event methods, without needing to inherit. It will call +activate+, +deactivate(view)+, and +onSetCursor+ (if present). Re-selecting the same object will first call {ModraUp::Tool#onCancel}(+1+) and then +activate+. The viewport will then forward mouse, keyboard, VCB, +getMenu+, and +draw+ events.
- `ModraUp::Model#add_observer` — Register a {ModraUp::ModelObserver}. Adding the same object a second time returns false. Transactions, group paths, saving, and component placement will dispatch corresponding callbacks.
- `ModraUp::Model#remove_observer` — Remove the model observer.
- `ModraUp::Model#start_operation` — Start a reversible operation. Should be paired with {#commit_operation} or {#abort_operation}. +disable_ui+ disables refreshing; +next_transparent+ / +transparent+ merge adjacent operations into a single undo step.
- `ModraUp::Model#commit_operation` — Commit the current operation.
- `ModraUp::Model#abort_operation` — Abort the current operation and rollback.
- `ModraUp::Model#definitions` — Component definition table.
- `ModraUp::Model#line_styles` — Built-in line styles (12 named styles).
- `ModraUp::Model#materials` — Materials table of the model.
- `ModraUp::Model#rendering_options` — The display style options for the model (edges, surfaces, background, X-ray, etc.), with key names matching SketchUp.
- `ModraUp::Model#shadow_info` — model.shadow_info -> ModraUp::ShadowInfo
- `ModraUp::Model#layers` — Layer (Tag) table. Index 0 is the default +`Layer0`+.
- `ModraUp::Model#active_layer` — The current layer. Newly drawn edges and faces appear on this layer.
- `ModraUp::Model#active_layer=` — Sets the current layer. Passing +nil+ will revert to the default layer +Layer0+.
- `ModraUp::Model#pages` — Scene page table (called scenes in the interface).
- `ModraUp::Model#attribute_dictionaries` — Collection of model-level attribute dictionaries. Returns +nil+ if no dictionary exists.
- `ModraUp::Model#attribute_dictionary` — Retrieve the model-level dictionary by name. Return `nil` if it does not exist and the `+create+` flag is false.
- `ModraUp::Model#set_attribute` — Writes a model-level attribute. An empty dictionary name or key raises an error. Inside {#start_operation}, the write is committed or aborted with geometry changes. Otherwise it creates a separate history entry. Values retain their type when read back. For structured data, use +JSON.generate+ in Ruby and pass the resulting string.
- `ModraUp::Model#get_attribute` — Read the model-level attribute. If +dict_name+ and +key+ are Symbols, convert them to strings. Return +default+ if the dictionary or key is missing. The return value type is the same as that written by {#set_attribute}.
- `ModraUp::Model#delete_attribute` — Delete the entire model-level dictionary, or delete a specific key.
- `ModraUp::Model#path` — Path to the saved file. Returns an empty string if the file has never been saved.
- `ModraUp::Model#name` — The name of the Model Info, independent of the file path and {#title}; it is an empty string if not set.
- `ModraUp::Model#entityID` — Like SketchUp, the model does not have a numeric ID; it returns a string +"Model"+. The entities within the model use {ModraUp::Entity#entityID} (an integer starting from 1).
- `ModraUp::Model#find_entity_by_id` — Find an entity by its {ModraUp::Entity#entityID}; a string parameter finds a group/component instance by GUID. Pass a single parameter to return an entity or +nil+, pass multiple or an array to return an array of the same order (with +nil+ at positions where no entity is found). entityID is valid only for the current session.
- `ModraUp::Model#find_entity_by_persistent_id` — Find by {ModraUp::Entity#persistent_id}. The persistent_id is saved with the model and remains unchanged upon reopening.
- `ModraUp::Model#valid?` — Returns true if the associated model is not yet closed; models opened in the background remain valid.
- `ModraUp::Model#deleted?` — Opposite of {#valid?}.
- `ModraUp::Model#typename` — Fixed as +"Model"+.
- `ModraUp::Model#guid` — Model version GUID. It will be updated and saved with the file upon successful modification.
- `ModraUp::Model#title` — Not saved as a string null value, saved as a filename (without extension).
- `ModraUp::Model#bounds` — The world bounding box of the model content.
- `ModraUp::Model#edit_transform` — Returns the transformation from the current editing context to world coordinates. At the model root it is the identity transformation.
- `ModraUp::Model#modified?` — Has the model been modified since the last save.
- `ModraUp::Model#number_faces` — The number of live faces in the model.
- `ModraUp::Model#raytest` — Find the first hit along the ray (face or edge, including coplanar boundaries). The ray is given as `[point, vector]`; the second item is a Point3d when specifying two points to determine the direction; a numerical array is interpreted as a vector, and if normalization is not possible, the second item is treated as a point. On hit, returns `[Geom::Point3d, Array]` (point and instance path), and if no hit, returns `nil`. The `wysiwyg_flag` is default `true`; set to `false` to also query hidden entities and geometry within hidden instances.
- `ModraUp::Model#save` — Save the model. If no path is specified and it has not been saved before, raise an ArgumentError (no dialog). The SKP writer currently only supports the 2017 format; explicitly specifying another version will return false.
- `ModraUp::Model#save_copy` — Save a copy, preserving the path, dirty state, and original model GUID. Explicitly specified versions are currently supported only up to VERSION_2017.
- `ModraUp::Model#export` — Exports the model without changing {#path}. The desktop host uses its CAD plugin for 3D DWG and DXF. Other supported formats include .skp, .osk3d, GLB, OBJ, and STL. The host accepts and ignores +show_summary+ or an options Hash.
- `ModraUp::Model#get_product_family` — Product line. Returns {ProLicensed} consistent with {ModraUp.is_pro?}.
- `ModraUp::Model#options` — Model options tree. Plugins read units by +options["UnitsOptions"]["LengthUnit"]+, with values such as {Length::Inches}.
- `ModraUp::Model#add_note` — Adds a text note (annotation) to the model at the given screen-space position.
- `ModraUp::Model#behavior`
- `ModraUp::Model#name=`
- `ModraUp::Model#description`
- `ModraUp::Model#description=`
- `ModraUp::Model#tags`
- `ModraUp::Model#tags=`
- `ModraUp::Model#active_section_planes`
- `ModraUp::Model#instance_path_from_pid_path`
- `ModraUp::Model#drawing_element_visible?`
- `ModraUp::Model#georeferenced?`
- `ModraUp::Model#mipmapping?`
- `ModraUp::Model#mipmapping=`
- `ModraUp::Model#save_thumbnail`
- `ModraUp::Model#place_component`
- `ModraUp::Model#import` — Import files into the current model by file extension. DWG/DXF files are automatically placed, while SKP/OSK3D files enter the component placement tool.
- `ModraUp::Model#inspect` — Returns a string of the form +#<Sketchup::Model:0x...>+, omitting instance variables.
- `ModraUp::Model#overlays` — The layer manager for overlay layers in this model.
- `ModraUp::Model#__mu_operation_open?` — Internal: Is there an uncommitted operation currently open (between +start_operation+ and +commit_operation+)? The process runs within the open operation without creating a new one.
- `ModraUp::Model#layout_document` `OS3D` — A model's embedded drawing sheet document. Returns the same object each time within the same model; accessing it after the model is closed throws a +TypeError+.
- `ModraUp::Model::VERSION_3` — The target format constants for {#save} and {#save_copy}. The current SKP writer only supports VERSION_2017.
- `ModraUp::Model::VERSION_4` — See {VERSION_3}.
- `ModraUp::Model::VERSION_5` — See {VERSION_3}.
- `ModraUp::Model::VERSION_6` — See {VERSION_3}.
- `ModraUp::Model::VERSION_7` — See {VERSION_3}.
- `ModraUp::Model::VERSION_8` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2013` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2014` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2015` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2016` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2017` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2018` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2019` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2020` — See {VERSION_3}.
- `ModraUp::Model::VERSION_2021` — See {VERSION_3}.
- `ModraUp::Model::ProTrial` — One of the values returned by {#get_product_family}.
- `ModraUp::Model::ProLicensed` — One possible return value of {#get_product_family}. Currently agrees with {ModraUp.is_pro?}.
- `ModraUp::Model::MakeTrial` — One of the values returned by {#get_product_family}.
- `ModraUp::Model::Make` — One of the values returned by {#get_product_family}.
- `ModraUp::Model::LOAD_STATUS_SUCCESS` — Loading the model was successful. The current {ModraUp.open_file} does not return this status to Ruby.
- `ModraUp::Model::LOAD_STATUS_SUCCESS_MORE_RECENT` — Opened a file that is more recent than the current program version. Currently not in use.

## `ModraUp::ModelObserver`

Model Observer. Registered with {ModraUp::Model#add_observer}.

- `ModraUp::ModelObserver#onTransactionStart` — Called when a {ModraUp::Model#start_operation} begins.
- `ModraUp::ModelObserver#onTransactionCommit` — Called when {ModraUp::Model#commit_operation} succeeds.
- `ModraUp::ModelObserver#onTransactionAbort` — Called when {ModraUp::Model#abort_operation} succeeds.
- `ModraUp::ModelObserver#onTransactionUndo` — Called when an undo transaction succeeds.
- `ModraUp::ModelObserver#onTransactionRedo` — Called when a redo operation is successful.
- `ModraUp::ModelObserver#onActivePathChanged` — Called when entering or exiting an edit path.
- `ModraUp::ModelObserver#onDeleteModel` — Called before the current document is replaced (new/open).
- `ModraUp::ModelObserver#onPlaceComponent` — Called after {ModraUp::Entities#add_instance} places an instance.
- `ModraUp::ModelObserver#onPreSaveModel` — Called before saving begins.
- `ModraUp::ModelObserver#onSaveModel` — Called after a successful save.
- `ModraUp::ModelObserver#onPostSaveModel` — Called after the save process completes.
- `ModraUp::ModelObserver#onTransactionEmpty` — Called when a transaction with no changes is submitted. History does not yet distinguish between empty transactions, so no dispatch is currently issued.
- `ModraUp::ModelObserver#onEraseAll` — Called when the model is erased entirely. {ModraUp::Drawingelement#erase!} / The viewport eraser dispatches this event after clearing the current drawing context.
- `ModraUp::ModelObserver#onExplode` — Called after a group or component instance is exploded. Dispatched after {ModraUp::Group#explode} / {ModraUp::ComponentInstance#explode} succeeds.
- `ModraUp::ModelObserver#onPidChanged` — Called when the persistent_id is rewritten. ModraUp does not alter the issued persistent_id (replicas are assigned new IDs when they are first numbered), so no event is dispatched.
- `ModraUp::ModelObserver#onBeforeComponentSaveAs` — Called before a component is saved as (for dynamic components, use instance). Currently, there is no right-click Save As path, and no dispatch occurs.
- `ModraUp::ModelObserver#onAfterComponentSaveAs` — Called after a component is saved as. Currently, no dispatch is issued.
- `ModraUp::ModelObserver#onClassificationChanged` — Called after a classification is added to or removed from a definition, or after a classification attribute is written successfully.

## `ModraUp::OptionsManager` · OS3D

Model options collection. Its providers, in order, are +"PageOptions"+, +"SlideshowOptions"+, and +"UnitsOptions"+. The first two control scene transitions and slide duration under Model Info → Animation. The third reads and writes the model's unit settings.

- `ModraUp::OptionsManager#[]` — Returns the option provider by name or index. Index 0/1/2 correspond to "PageOptions", "SlideshowOptions", "UnitsOptions"; others are nil.
- `ModraUp::OptionsManager#keys` — List of provider names.
- `ModraUp::OptionsManager#size` — Number of providers.
- `ModraUp::OptionsManager#each` — Iterate over the option providers.

## `ModraUp::OptionsProvider` · OS3D

A set of name/value options retrieved from {ModraUp::Model#options}.

- `ModraUp::OptionsProvider#[]` — Return the value by key name or index. Unknown keys return +nil+.
- `ModraUp::OptionsProvider#[]=` — Write the option. Returns the written value if successful, returns +false+ for unsupported keys or values like feet or yards.
- `ModraUp::OptionsProvider#name` — Provider Name.
- `ModraUp::OptionsProvider#keys` — All key names.
- `ModraUp::OptionsProvider#size` — Number of keys.
- `ModraUp::OptionsProvider#key?` — Returns whether the given key exists.
- `ModraUp::OptionsProvider#each` — Iterate through all options.
- `ModraUp::OptionsProvider#each_key` — Iterate through the key names.
- `ModraUp::OptionsProvider#each_value` — Iterate through values.
- `ModraUp::OptionsProvider#add_observer` — Add a {ModraUp::OptionsProviderObserver}. Dispatches when +LengthUnit+ / +LengthPrecision+ or animation options are changed via {#[]=}.
- `ModraUp::OptionsProvider#remove_observer` — Remove observer.

## `ModraUp::OptionsProviderObserver`

Base class for option providers observers. {ModraUp::OptionsProvider#[]=} dispatches when a unit or animation option is modified.

- `ModraUp::OptionsProviderObserver#onOptionsProviderChanged` — Unit or animation options changed. {ModraUp::OptionsProvider#[]=} dispatches this event when the unit or animation options are changed.

## `ModraUp::Overlay`

Viewport overlay layer. Not a {ModraUp::Entity}. Subclasses implement +draw+ / mouse callbacks, then add to the model via {ModraUp::OverlaysManager#add}.

- `ModraUp::Overlay#initialize` — Construct with source inferred by call stack {#source}: take the extension name of the registered file folder where the calling file is located.
- `ModraUp::Overlay#overlay_id` — The unique ID passed during construction.
- `ModraUp::Overlay#name` — Panel display name.
- `ModraUp::Overlay#description` — Panel description, displayed below the list when this line is selected.
- `ModraUp::Overlay#description=` — Modify the description. The overlay refreshes in the viewport when added to the model.
- `ModraUp::Overlay#enabled?` — Enabled or not. It is +false+ before {ModraUp::OverlaysManager#add}.
- `ModraUp::Overlay#enabled=` — Toggle the overlay layer on or off, which is the same as the checkbox in the palette. Call {#start} when turning on and {#stop} when turning off; do nothing if the state does not change.
- `ModraUp::Overlay#valid?` — After removing an overlay with ModraUp::OverlaysManager#remove, its validity becomes +false+ and it cannot be added back.
- `ModraUp::Overlay#source` — The overlay layer comes from which extension: determined by the {SketchupExtension#name} found at the time of construction. It is displayed in the tray as "Extension: Name". If not in any registered extension's folder (e.g., created in the Ruby console), it is an empty string.
- `ModraUp::Overlay#start` — Called when the overlay is enabled through its checkbox or {#enabled=}. Attach observers and prepare caches here. The base implementation does nothing.
- `ModraUp::Overlay#stop` — Called when the overlay is disabled or removed through {ModraUp::OverlaysManager#remove} while enabled. Detach observers and clear caches here. The base implementation does nothing.
- `ModraUp::Overlay#draw` — Callback (subclass implementation): Called every time the viewport is refreshed while the overlay is active. Only draw the cached data and do not perform any recomputation here.
- `ModraUp::Overlay#onMouseMove` — Implement this callback to track pointer motion within the viewport while the overlay is enabled, regardless of the active tool. Coordinates are in logical pixels. Keep this frequent callback lightweight.
- `ModraUp::Overlay#onMouseEnter` — Called when the pointer enters the viewport while the overlay is enabled. Implement this callback in a subclass.
- `ModraUp::Overlay#onMouseLeave` — Called when the pointer leaves the viewport while the overlay is enabled. Implement this callback in a subclass.
- `ModraUp::Overlay#inspect` — Returns a string of the form +#<Sketchup::Overlay:0x...>+, omitting instance variables.

## `ModraUp::OverlaysManager`

A list of {ModraUp::Overlay} for a model, ordered as they appear in the tray and the drawing order. The same +overlay_id+ cannot be added twice.

- `ModraUp::OverlaysManager#add` — Register the overlay layer, which will immediately appear in the "Overlays" tray (it will not open by default). Returns +false+ if the ID conflicts.
- `ModraUp::OverlaysManager#remove` — Remove the overlay layer and set its {ModraUp::Overlay#valid?} to false. The overlay will first receive a {ModraUp::Overlay#stop} event if it is open.
- `ModraUp::OverlaysManager#each`
- `ModraUp::OverlaysManager#size`
- `ModraUp::OverlaysManager#length` — Same as {#size}.
- `ModraUp::OverlaysManager#[]`
- `ModraUp::OverlaysManager#at` — Equivalent to {#[]}.
- `ModraUp::OverlaysManager#inspect` — Returns a string of the form +#<Sketchup::OverlaysManager:0x...>+, omitting instance variables.

## `ModraUp::Page` · OS3D · `< ModraUp::Entity`

A page scene (the scene tab in the interface). The camera and hidden layers are saved by the core; axes, styles, shadows, and section planes have no associated data.

- `ModraUp::Page#name` — Name on the scene tab.
- `ModraUp::Page#name=` — Renames the page. If the name is already taken, the host generates a unique name.
- `ModraUp::Page#description` — Documentation in the Scene Manager.
- `ModraUp::Page#description=` — Set the description.
- `ModraUp::Page#camera` — The camera on this page. Changing it will write back to the scene; if this page is the currently selected one, the viewport will update accordingly.
- `ModraUp::Page#shadow_info` — Returns the {ModraUp::ShadowInfo} settings saved with this scene, independently of the model's current shadow settings. The scene's +use_shadow_info?+ flag controls whether switching to the scene applies them.
- `ModraUp::Page#delay_time` — Slide duration in seconds. New scenes use +-1+ to inherit the model default from +model.options["SlideshowOptions"]["SlideTime"]+.
- `ModraUp::Page#delay_time=` — Set the number of seconds to pause.
- `ModraUp::Page#transition_time` — The number of seconds for the transition to this page. A new scene of +-1+ indicates using the model's default transition time (model.options["PageOptions"]["TransitionTime"]).
- `ModraUp::Page#transition_time=` — Set the transition time in seconds.
- `ModraUp::Page#include_in_animation?` — Does this page appear during the animation playback («View › Animation › Play»).
- `ModraUp::Page#include_in_animation=` — Set whether to include in animation.
- `ModraUp::Page#layers` — The layers on this page that are hidden. If layer visibility is not used, it defaults to +nil+.
- `ModraUp::Page#layer_folders` — The hidden layer folders on this page. Returns `nil` if layer visibility is not in use.
- `ModraUp::Page#set_visibility` — Sets whether layers or layer folders are visible on this page. Only changes the scene's saved content and does not affect the current viewport.
- `ModraUp::Page#get_drawingelement_visibility` — The element is visible on this page (for hidden geometry/scenes saved). Uncontrolled elements (ordinary geometry in groups or components) return +true+.
- `ModraUp::Page#set_drawingelement_visibility` — Sets the visibility of elements on this page, only modifying the scene's saved content. Controlled are the drawing elements at the model root («top-level hidden geometry») as well as groups and components at any level («hidden objects»); other elements return false.
- `ModraUp::Page#hidden_entities` — The hidden drawing elements on this page. Only lists ordinary geometry when hiding geometries, and only lists groups and components when hiding objects; returns +nil+ if neither is hidden.
- `ModraUp::Page#rendering_options` — The rendering style saved for this page. Reading and writing is a scene snapshot, not modifying the current view; it becomes effective when switching to this scene and applying the style. Unsaved scenes read the current model values, and the first write saves the current model style as the base.
- `ModraUp::Page#update` — Updates the page in the current viewport. Omitting the flag uses {PAGE_USE_ALL}. The camera is set to the current {ModraUp::View#camera}; layer visibility copies the current hidden layers.
- `ModraUp::Page#model` — The model it belongs to.
- `ModraUp::Page#parent` — Parent scene table.
- `ModraUp::Page#deleted?` — Returns true after being deleted from the scene table.
- `ModraUp::Page#valid?` — If the page is valid, it returns true.
- `ModraUp::Page#typename` — Fix +Page+.
- `ModraUp::Page#use_camera?` — Returns whether the camera is saved.
- `ModraUp::Page#use_camera=` — Returns whether the camera is saved.
- `ModraUp::Page#use_rendering_options?` — Whether to save the drawing style. The scene page does not save {ModraUp::RenderingOptions} separately; switching scenes does not change the style.
- `ModraUp::Page#use_rendering_options=` — Whether to save the drawing style flag.
- `ModraUp::Page#use_shadow_info?` — Does whether to apply the page's shadow parameters when switching scenes.
- `ModraUp::Page#use_shadow_info=` — Controls the saving and application of shadow parameters for this page; update re-captures the current parameters.
- `ModraUp::Page#use_axes?` — Whether to save the axes. This kernel has no Axes data.
- `ModraUp::Page#use_axes=` — Whether to save axis flags.
- `ModraUp::Page#use_hidden?` — Returns whether hidden geometry is saved (for the merged flag prior to 2019).
- `ModraUp::Page#use_hidden=` — Whether to save hidden geometry flags.
- `ModraUp::Page#use_hidden_layers?` — Whether to save layer visibility.
- `ModraUp::Page#use_hidden_layers=` — Whether to save layer visibility.
- `ModraUp::Page#use_section_planes?` — Whether to save the section planes. This core does not have section plane data.
- `ModraUp::Page#use_section_planes=` — Whether to save section flagsticks.
- `ModraUp::Page#use_hidden_geometry?` — Whether to save hidden geometry (SketchUp 2020+).
- `ModraUp::Page#use_hidden_geometry=` — Whether to save hidden geometry flags.
- `ModraUp::Page#use_hidden_objects?` — Whether to save hidden groups/components.
- `ModraUp::Page#use_hidden_objects=` — Whether to save the hidden group/component flag.
- `ModraUp::Page#use_environment?` — Whether to save ambient light. This core does not have Environment data.
- `ModraUp::Page#use_environment=` — Whether to save the environment flag.
- `ModraUp::Page#use_style?` `OS3D` — Returns whether styles are saved. This core page does not have a style, fixed to +false+.
- `ModraUp::Page#use_style=` `OS3D` — SketchUp assigns the style object to the scene. This core operation is ignored and returns the parameter itself.

## `ModraUp::Pages` · OS3D · `< ModraUp::Entity`

The model's scene pages table. Obtain it from {ModraUp::Model#pages}. It includes Enumerable.

- `ModraUp::Pages.add_frame_change_observer` — Register a global {ModraUp::FrameChangeObserver}. The +frameChange+ method is called when switching scenes.
- `ModraUp::Pages.remove_frame_change_observer` — Remove the observer by the id returned from {ModraUp::Pages.add_frame_change_observer}.
- `ModraUp::Pages#[]` — Retrieve the scene by index or name. Return +nil+ if none exists.
- `ModraUp::Pages#add` — Add a new page using the current camera and layer visibility state, and select it. If the name is a duplicate, it will be renamed to avoid conflict. Omitting +flags+ sets it to {PAGE_USE_ALL}.
- `ModraUp::Pages#each` — Iterate through the scene pages.
- `ModraUp::Pages#erase` — Delete a page.
- `ModraUp::Pages#size` — Number of scenes.
- `ModraUp::Pages#parent` — The model it belongs to.
- `ModraUp::Pages#selected_page` — The currently selected page. Returns `nil` if no page is selected.
- `ModraUp::Pages#selected_page=` `OS3D` — Select the scene and apply its camera, shadows, and layer visibility immediately. No transition animation is played.
- `ModraUp::Pages#add_observer` — Register a {ModraUp::PagesObserver}. Adding the same object a second time returns +false+.
- `ModraUp::Pages#remove_observer` — Remove observers from the scene table.
- `ModraUp::Pages#unique_name` `OS3D` — Generate a unique scene name based on the root name. If the name is already in use, append a number to it.
- `ModraUp::Pages#slideshow_time` — Slide Show Total Time: Includes the seconds for transitions and holds of scenes that are included in the animation. If a scene's own time is negative, it defaults to the model's default time ({ModraUp::Page#include_in_animation?} / {model.options["PageOptions"]} / {["SlideshowOptions"]}). If scene transitions are disabled, the transition time is counted as 0.
- `ModraUp::Pages#show_frame_at` — Display the slide at the frame after +seconds+ seconds: Select the scene at that moment and apply it. The camera position is set to the corresponding position from the previous scene to the current one (consistent with the easing during playback). The timeline is as follows: the first scene stays for the delay time, followed by each scene transitioning and then staying, and finally transitioning back to the start from the first scene, with a total length of {#slideshow_time}; scenes outside the range are ignored. Only scenes where {ModraUp::Page#include_in_animation?} returns true are considered.
- `ModraUp::Pages#reorder` — Move the scene to index +new_index+ (starting at 0), keeping the selected scene unchanged.

## `ModraUp::PagesObserver`

Scene table observer. Registered via {ModraUp::Pages#add_observer}.

- `ModraUp::PagesObserver#onElementAdded` — Called after {ModraUp::Pages#add}.
- `ModraUp::PagesObserver#onElementRemoved` — Called after {ModraUp::Pages#erase}.
- `ModraUp::PagesObserver#onContentsModified` — Called when the contents of the scene graph or the currently selected page changes.

## `ModraUp::PickHelper`

Viewport picking. Obtain it from {ModraUp::View#pick_helper}. The same instance will be reused.

- `ModraUp::PickHelper#do_pick` — Picks at screen coordinates and returns the number of pick records. The +aperture+ argument gives the side length of a square. Omit it or pass 0 to use the viewport's default click tolerance. If an edge takes priority, the results also include the face under the cursor and its path. The first record remains the native selection tool's best hit.
- `ModraUp::PickHelper#init` — Record the screen coordinates and square aperture for subsequent multiple {#test_point} calls (only pass model points). The aperture is the width and height of the square in pixels; omit or use 0 for the default 5. No need to call {#do_pick} first.
- `ModraUp::PickHelper#test_point` — The projected model point falls within a square centered at +(x, y)+ with side length +aperture+. The single-parameter form must be initialized with {#init}; it is independent of the result of {#do_pick}.
- `ModraUp::PickHelper#count` — The number of hits from the most recent {#do_pick} / {#window_pick} / {#boundingbox_pick}.
- `ModraUp::PickHelper#path_at` — The +index+th pick path: from the current edit context group/instance to the leaf element. Out of bounds returns +nil+.
- `ModraUp::PickHelper#all_picked` — The first element of each pick path in the current editing context. Nested hits will repeat groups/instances.
- `ModraUp::PickHelper#best_picked` — The frontmost hit in the current editing context (a group/instance or face/edge).
- `ModraUp::PickHelper#view` — The viewport to which this picker belongs.
- `ModraUp::PickHelper#leaf_at` — The leaf geometry at the +index+ path (typically a face or edge).
- `ModraUp::PickHelper#element_at` — The +index+th path in the current edit context, corresponding to the item picked by {#all_picked}.
- `ModraUp::PickHelper#depth_at` — The depth (path length) of the path at index +index+. Out of bounds returns 0.
- `ModraUp::PickHelper#transformation_at` — Transform the leaf geometry coordinates to the current edit context's transformation. Out-of-bounds results in +nil+.
- `ModraUp::PickHelper#picked_face` — The best face from the most recent {#do_pick}. Must precede a {#do_pick}.
- `ModraUp::PickHelper#picked_edge` — The best edge from the most recent {#do_pick}. Must be called after {#do_pick}.
- `ModraUp::PickHelper#picked_element` — The best non-face-non-edge element (usually a group or component instance). With +index+, it refers to the element at that position in the path.
- `ModraUp::PickHelper#pick_segment` — Determine if a pick segment falls within the screen aperture. Returns the index starting from 0 if a point is hit; returns -1, -2, etc., if a segment is hit. Returns +false+ if not hit.
- `ModraUp::PickHelper#window_pick` — Rectangle screen pick. Ignore +z+. +pick_type+ is {PICK_INSIDE} or {PICK_CROSSING}. Hits are recorded, then use {#all_picked} to get the current context elements.
- `ModraUp::PickHelper#boundingbox_pick` — Pick using the bounding box in model space. The +transformation+ is applied to the box. The result is also added to {#all_picked}.
- `ModraUp::PickHelper::PICK_INSIDE` — {#window_pick} / {#boundingbox_pick}: The entity is completely inside the box.
- `ModraUp::PickHelper::PICK_CROSSING` — {#window_pick} / {#boundingbox_pick}: The element intersects with the box to be picked.

## `ModraUp::Procedure`

- `ModraUp::Procedure#initialize` — Abstract base class. Subclasses call `super` in `initialize`, providing a unique ID (e.g., `{Company.Extend.Procedure}`), a visible name, and an integer version.
- `ModraUp::Procedure#id`
- `ModraUp::Procedure#description`
- `ModraUp::Procedure#version`
- `ModraUp::Procedure#declare_params_and_ui` — Must be implemented. Returns a JSON object string: keys are parameter IDs (matching the keys in +attach_procedure+), values are control descriptions. This procedure reads these fields: +type+ (number/length/angle/integer/boolean/checkbox/string/text/dropdown/choice/button), +label+, +default+, +min+, +max+, +step+, +options+ (string, or {value, label}), +group+. Buttons are not parameters. Args: +:model+.
- `ModraUp::Procedure#validate` — Must be implemented. Args: +:model+, +:control_entities+, +:parameters+ (Symbol keys). Do not modify the model. Return +true+, +false+, or an error Hash array (+:title+, +:description+, +:involved_entities+).
- `ModraUp::Procedure#run` — Must be implemented. Args: +model+, +definition+, +parameters+. Call within the operation started by this procedure; do not call +start_operation+. Clear +definition.entities+ (i.e., clear the output), then generate geometry. Return value is the same as for #validate; revert the entire step on failure.
- `ModraUp::Procedure#draw` — Optional. Called every time the view is refreshed when the component is opened for editing, to draw the preview. Args: `+model+, +view+, +control_entities+, +parameters+`.
- `ModraUp::Procedure#get_extents` — Optional. #draw Returns the extent when drawing outside the component; defaults to an empty bounding box. Drawing or modifying the model is not allowed.
- `ModraUp::Procedure#get_widget_states` — Optional. Control id → {enabled:, visible:}; omitted controls remain unchanged. Args: +model+, +parameters+.
- `ModraUp::Procedure#on_button_clicked` — Optional. The button control was clicked. Args: +:model+, +:definition+, +:button_id+, +:parameters+. Perform an operation on the model when modifying it. Return +:reload_ui+ to rebuild the control.
- `ModraUp::Procedure#on_open_close` — Optional. Component opens or closes for editing. Args: `+action+` (`+:open+` / `+:close+`), `+from_undo_redo+,` `+model+,` `+definition+.` Only observe, do not modify the model.

## `ModraUp::RegionalSettings`

Host regional format: decimal point and list separator.

- `ModraUp::RegionalSettings.decimal_separator` — The decimal point used in the current locale (typically either `.` or `,`).
- `ModraUp::RegionalSettings.list_separator` — List separator. Use a semicolon when the decimal point is a comma, otherwise use a comma.

## `ModraUp::RenderingOptions` · `< ModraUp::Entity`

The display style of the model (line style, surface, background, section plane, X-ray, etc.) is stored and retrieved in the form of a key-value table.

- `ModraUp::RenderingOptions#[]` — Read an option. Boolean, integer, float, or {ModraUp::Color}; return +nil+ for an unknown key.
- `ModraUp::RenderingOptions#[]=` — Set an option and refresh the viewport; the value must actually change to dispatch {ModraUp::RenderingOptionsObserver#onRenderingOptionsChanged} (+type+ as the corresponding +ROP…+ constant). Colors can be {ModraUp::Color}, color names, or +[r, g, b(, a)]+.
- `ModraUp::RenderingOptions#hatch_pattern` — Read the default section hatch pattern of the style: the section area without any groups, components, materials, or section plane patterns uses it.
- `ModraUp::RenderingOptions#hatch_pattern=` — Sets the default hatch pattern for the style (also setting the hatch color).
- `ModraUp::RenderingOptions#keys` — All key names (sorted alphabetically).
- `ModraUp::RenderingOptions#each` — Yield each key and value.
- `ModraUp::RenderingOptions#each_pair` — Like {#each_pair}.
- `ModraUp::RenderingOptions#each_key` — Yield each key name individually.
- `ModraUp::RenderingOptions#length` — Number of options.
- `ModraUp::RenderingOptions#size` — Same as {#length}.
- `ModraUp::RenderingOptions#add_observer` — Register a {ModraUp::RenderingOptionsObserver}. Adding the same object a second time returns false.
- `ModraUp::RenderingOptions#remove_observer` — Remove the observer.
- `ModraUp::RenderingOptions::ROPAssign` — ROPAssign = 0
- `ModraUp::RenderingOptions::ROPDrawHidden` — ROPDrawHidden = 28
- `ModraUp::RenderingOptions::ROPDrawHiddenGeometry` — ROPDrawHiddenGeometry = 29
- `ModraUp::RenderingOptions::ROPDrawHiddenObjects` — ROPDrawHiddenObjects = 30
- `ModraUp::RenderingOptions::ROPEditComponent` — ROPEditComponent = 31
- `ModraUp::RenderingOptions::ROPSectionDisplayTurnedOff` — ROPSectionDisplayTurnedOff = 27
- `ModraUp::RenderingOptions::ROPSetAOColor` — ROPSetAOColor = 76
- `ModraUp::RenderingOptions::ROPSetAOColorEnabled` — ROPSetAOColorEnabled = 75
- `ModraUp::RenderingOptions::ROPSetAODistance` — ROPSetAODistance = 72
- `ModraUp::RenderingOptions::ROPSetAOEnabled` — ROPSetAOEnabled = 71
- `ModraUp::RenderingOptions::ROPSetAOIntensity` — ROPSetAOIntensity = 74
- `ModraUp::RenderingOptions::ROPSetAOMultiplier` — ROPSetAOMultiplier = 73
- `ModraUp::RenderingOptions::ROPSetBackgroundColor` — ROPSetBackgroundColor = 12
- `ModraUp::RenderingOptions::ROPSetConstructionColor` — ROPSetConstructionColor = 15
- `ModraUp::RenderingOptions::ROPSetDepthQueEdges` — ROPSetDepthQueEdges = 33
- `ModraUp::RenderingOptions::ROPSetDepthQueWidth` — ROPSetDepthQueWidth = 35
- `ModraUp::RenderingOptions::ROPSetDisplayColorByLayer` — ROPSetDisplayColorByLayer = 16
- `ModraUp::RenderingOptions::ROPSetDisplayDims` — ROPSetDisplayDims = 59
- `ModraUp::RenderingOptions::ROPSetDisplayFog` — ROPSetDisplayFog = 20
- `ModraUp::RenderingOptions::ROPSetDisplayInstanceAxes` — ROPSetDisplayInstanceAxes = 11
- `ModraUp::RenderingOptions::ROPSetDisplaySketchAxes` — ROPSetDisplaySketchAxes = 39
- `ModraUp::RenderingOptions::ROPSetDisplayText` — ROPSetDisplayText = 58
- `ModraUp::RenderingOptions::ROPSetDisplayWatermarks` — ROPSetDisplayWatermarks = 61
- `ModraUp::RenderingOptions::ROPSetDrawBackEdges` — ROPSetDrawBackEdges = 63
- `ModraUp::RenderingOptions::ROPSetDrawGround` — ROPSetDrawGround = 55
- `ModraUp::RenderingOptions::ROPSetDrawHorizon` — ROPSetDrawHorizon = 54
- `ModraUp::RenderingOptions::ROPSetDrawUnderground` — ROPSetDrawUnderground = 56
- `ModraUp::RenderingOptions::ROPSetEdgeColorMode` — ROPSetEdgeColorMode = 5
- `ModraUp::RenderingOptions::ROPSetEdgeDisplayMode` — ROPSetEdgeDisplayMode = 4
- `ModraUp::RenderingOptions::ROPSetEdgeType` — ROPSetEdgeType = 41
- `ModraUp::RenderingOptions::ROPSetExtendEdges` — ROPSetExtendEdges = 8
- `ModraUp::RenderingOptions::ROPSetExtendLines` — ROPSetExtendLines = 18
- `ModraUp::RenderingOptions::ROPSetFaceColor` — ROPSetFaceColor = 40
- `ModraUp::RenderingOptions::ROPSetFaceColorMode` — ROPSetFaceColorMode = 9999
- `ModraUp::RenderingOptions::ROPSetFogColor` — ROPSetFogColor = 23
- `ModraUp::RenderingOptions::ROPSetFogDist` — ROPSetFogDist = 24
- `ModraUp::RenderingOptions::ROPSetFogHint` — ROPSetFogHint = 25
- `ModraUp::RenderingOptions::ROPSetFogUseBkColor` — ROPSetFogUseBkColor = 60
- `ModraUp::RenderingOptions::ROPSetForegroundColor` — ROPSetForegroundColor = 13
- `ModraUp::RenderingOptions::ROPSetGroundColor` — ROPSetGroundColor = 53
- `ModraUp::RenderingOptions::ROPSetGroundTransparency` — ROPSetGroundTransparency = 57
- `ModraUp::RenderingOptions::ROPSetHideConstructionGeometry` — ROPSetHideConstructionGeometry = 51
- `ModraUp::RenderingOptions::ROPSetHighlightColor` — ROPSetHighlightColor = 14
- `ModraUp::RenderingOptions::ROPSetHorizonColor` — ROPSetHorizonColor = 70
- `ModraUp::RenderingOptions::ROPSetJitterEdges` — ROPSetJitterEdges = 6
- `ModraUp::RenderingOptions::ROPSetLineEndEdges` — ROPSetLineEndEdges = 34
- `ModraUp::RenderingOptions::ROPSetLineEndWidth` — ROPSetLineEndWidth = 36
- `ModraUp::RenderingOptions::ROPSetLineExtension` — ROPSetLineExtension = 19
- `ModraUp::RenderingOptions::ROPSetLineStyleEdges` — ROPSetLineStyleEdges = 7
- `ModraUp::RenderingOptions::ROPSetLockedColor` — ROPSetLockedColor = 38
- `ModraUp::RenderingOptions::ROPSetMaterialTransparency` — ROPSetMaterialTransparency = 43
- `ModraUp::RenderingOptions::ROPSetModelTransparency` — ROPSetModelTransparency = 42
- `ModraUp::RenderingOptions::ROPSetPhotomatchBackgroundOpacity` — ROPSetPhotomatchBackgroundOpacity = 65
- `ModraUp::RenderingOptions::ROPSetPhotomatchDrawBackground` — ROPSetPhotomatchDrawBackground = 64
- `ModraUp::RenderingOptions::ROPSetPhotomatchDrawOverlay` — ROPSetPhotomatchDrawOverlay = 66
- `ModraUp::RenderingOptions::ROPSetPhotomatchOverlayOpacity` — ROPSetPhotomatchOverlayOpacity = 67
- `ModraUp::RenderingOptions::ROPSetProfileEdges` — ROPSetProfileEdges = 9
- `ModraUp::RenderingOptions::ROPSetProfileWidth` — ROPSetProfileWidth = 10
- `ModraUp::RenderingOptions::ROPSetProfilesOnlyEdges` — ROPSetProfilesOnlyEdges = 37
- `ModraUp::RenderingOptions::ROPSetRenderMode` — ROPSetRenderMode = 1
- `ModraUp::RenderingOptions::ROPSetSectionActiveColor` — ROPSetSectionActiveColor = 44
- `ModraUp::RenderingOptions::ROPSetSectionCutFilled` — ROPSetSectionCutFilled = 50
- `ModraUp::RenderingOptions::ROPSetSectionCutWidth` — ROPSetSectionCutWidth = 49
- `ModraUp::RenderingOptions::ROPSetSectionDefaultCutColor` — ROPSetSectionDefaultCutColor = 46
- `ModraUp::RenderingOptions::ROPSetSectionDefaultFillColor` — ROPSetSectionDefaultFillColor = 47
- `ModraUp::RenderingOptions::ROPSetSectionDisplayMode` — ROPSetSectionDisplayMode = 26
- `ModraUp::RenderingOptions::ROPSetSectionInactiveColor` — ROPSetSectionInactiveColor = 45
- `ModraUp::RenderingOptions::ROPSetSkyColor` — ROPSetSkyColor = 52
- `ModraUp::RenderingOptions::ROPSetTexture` — ROPSetTexture = 3
- `ModraUp::RenderingOptions::ROPSetTransparencyObsolete` — ROPSetTransparencyObsolete = 2
- `ModraUp::RenderingOptions::ROPSetXRayOpacity` — ROPSetXRayOpacity = 62
- `ModraUp::RenderingOptions::ROPTransparencySortMethod` — ROPTransparencySortMethod = 32

## `ModraUp::RenderingOptionsObserver`

Base class for drawing option observers. Register using {ModraUp::RenderingOptions#add_observer}.

- `ModraUp::RenderingOptionsObserver#onRenderingOptionsChanged` — Called when a rendering option's value changes (does not dispatch if the value remains the same).

## `ModraUp::SectionPlane` · `< ModraUp::Drawingelement`

A non-destructive section plane belonging to the drawing context; component instances share the section settings defined within. Cannot be directly instantiated with +new+.

- `ModraUp::SectionPlane#hatch_pattern` — Returns the section plane's fill pattern. It applies to cut regions that have neither a group or component pattern nor a material pattern.
- `ModraUp::SectionPlane#hatch_pattern=` — Sets the section plane's hatch pattern; nil removes the pattern.
- `ModraUp::SectionPlane#activate` — Activate the current section plane context, replacing any previously activated section plane.
- `ModraUp::SectionPlane#active?` — Query if the section plane is active within its context, independent of symbol hidden state.
- `ModraUp::SectionPlane#get_plane` — Returns the four coefficients of the context local plane.
- `ModraUp::SectionPlane#set_plane` — Modify the local section plane.
- `ModraUp::SectionPlane#name` — Retrieve the name of the section plane.
- `ModraUp::SectionPlane#name=` — Set the name of the section plane.
- `ModraUp::SectionPlane#symbol` — Read the section plane leader.
- `ModraUp::SectionPlane#symbol=` — Set the section plane label to a maximum of three characters.

## `ModraUp::Selection`

The current selection. Includes Enumerable. Clearing the selection triggers the cleared callback rather than the bulk-change callback.

- `ModraUp::Selection#[]` — Retrieve the selected item by index; out-of-bounds returns +nil+. Order is undefined.
- `ModraUp::Selection#at` — Alias for {#[]}.
- `ModraUp::Selection#first` — First item; an empty selection is +nil+.
- `ModraUp::Selection#each` — Iterate over the selected items.
- `ModraUp::Selection#length` — Number of selected entities.
- `ModraUp::Selection#size` — Alias for {#length}.
- `ModraUp::Selection#nitems` — Alias for {#length}.
- `ModraUp::Selection#count` — Alias for {#length}.
- `ModraUp::Selection#empty?` — Returns whether the collection or path is empty.
- `ModraUp::Selection#include?` — Does the drawing element belong to the selection set.
- `ModraUp::Selection#contains?` — Alias for {#include?}.
- `ModraUp::Selection#add` — Add to Selection (parameters can also be an array). Returns the new count.
- `ModraUp::Selection#remove` — Remove from selection. Returns the new count.
- `ModraUp::Selection#toggle` — Toggle the members in the selection set.
- `ModraUp::Selection#clear` — Clear the selection. Observers receive +onSelectionCleared+, not Bulk.
- `ModraUp::Selection#invert` — Inverts the selection in the current {ModraUp::Model#active_entities}.
- `ModraUp::Selection#shift` — Remove and return the first item; return +nil+ if empty.
- `ModraUp::Selection#is_curve?` — Does the current selection form a curve (a sequence of connected edges).
- `ModraUp::Selection#is_surface?` — Does the currently selected face constitute a surface. Only check the selected faces.
- `ModraUp::Selection#single_object?` — Returns true if only one object (a group/component or a connected edge/face) is selected.
- `ModraUp::Selection#model` — The model it belongs to.
- `ModraUp::Selection#add_observer` — Register a selection observer. Adding the same object a second time returns false.
- `ModraUp::Selection#remove_observer` — Removes the observer. Returns +false+ if it was absent.

## `ModraUp::SelectionObserver`

The base class for selection observers. Plugins subclass it to implement

- `ModraUp::SelectionObserver#onSelectionBulkChange` — Called when the selection set is bulk-replaced (e.g., by picking or box-selecting).
- `ModraUp::SelectionObserver#onSelectionAdded` — Called when a single entity is added to the selection set.
- `ModraUp::SelectionObserver#onSelectionRemoved` — Called when a single entity is removed from the selection.
- `ModraUp::SelectionObserver#onSelectedRemoved` — This alias, which is misspelled, is also called by SketchUp in addition to +onSelectionRemoved+. The host also dispatches this.
- `ModraUp::SelectionObserver#onSelectionCleared` — Called when the selection set is cleared.

## `ModraUp::ShadowInfo` · `< ModraUp::Entity`

23 parameters for model or scene shadows. Time is stored as local clock hours in UTC; SunDirection is a derived read-only vector.

- `ModraUp::ShadowInfo.keys` — List of ordered keys. @return [Array<String>]
- `ModraUp::ShadowInfo.each_key` — Iterate over keys. @return [Enumerator, nil]
- `ModraUp::ShadowInfo#[]` — Shadow parameter retrieval; returns nil for unknown keys. @return [Object, nil]
- `ModraUp::ShadowInfo#[]=` — Writes writable parameters; raises KeyError for invalid/readonly keys, TypeError for type errors, and returns false on out-of-bounds. @return [Object, false]
- `ModraUp::ShadowInfo#keys` — List of ordered keys. @return [Array<String>]
- `ModraUp::ShadowInfo#each` — Iterate through keys; returns an Enumerator if no block is given. @return [Enumerator, nil]
- `ModraUp::ShadowInfo#each_pair` — Alias for each. @return [Enumerator, nil]
- `ModraUp::ShadowInfo#each_key` — Iterate over keys. @return [Enumerator, nil]
- `ModraUp::ShadowInfo#length` — Number of edges. @return [Integer]
- `ModraUp::ShadowInfo#size` — Number of edges. @return [Integer]
- `ModraUp::ShadowInfo#add_observer` — Register an observer, returning false again. @return [Boolean]
- `ModraUp::ShadowInfo#remove_observer` — Remove observer. @return [Boolean]
- `ModraUp::ShadowInfo#model` — Belongs to model. @return [ModraUp::Model]
- `ModraUp::ShadowInfo#valid?` — The object still belongs to the current document and the scene has not been deleted. @return [Boolean]
- `ModraUp::ShadowInfo#deleted?` — The object is invalid. @return [Boolean]

## `ModraUp::ShadowInfoObserver`

Base class for Shadow Information Observer, listening to parameter changes in Ruby, Shadow Dock, and scene switches.

- `ModraUp::ShadowInfoObserver#onShadowInfoChanged` — Shadows settings changed; type is 0 for time, 1 for switch, 2 for shading, 3 for position, 4 for north, 7 for bright shadows, 8 for edges, 9 for ground, 10 for faces.

## `ModraUp::Skp`

Unopened +.skp+ file tools.

- `ModraUp::Skp.read_guid` — Read the model GUID from a +.skp+ file. Raise {ArgumentError} if the file is missing or not a SketchUp model.

## `ModraUp::Text` · `< ModraUp::Drawingelement`

Text is a Drawingelement whose label always faces the screen. Screen text

- `ModraUp::Text#text`
- `ModraUp::Text#text=`
- `ModraUp::Text#point` — Model text: the 3D attach point (leader tip). Screen text (+Model#add_note+):
- `ModraUp::Text#point=`
- `ModraUp::Text#vector` — Offset from {#point} to the label. Screen text returns a zero vector.
- `ModraUp::Text#vector=`
- `ModraUp::Text#has_leader?`
- `ModraUp::Text#leader_type`
- `ModraUp::Text#leader_type=`
- `ModraUp::Text#display_leader?`
- `ModraUp::Text#display_leader=`
- `ModraUp::Text#arrow_type`
- `ModraUp::Text#arrow_type=`
- `ModraUp::Text#line_weight`

## `ModraUp::Texture` · `< ModraUp::Entity`

Texture mapping. Obtain from {ModraUp::Material#texture}. Parent class is {ModraUp::Entity}, not {ModraUp::Drawingelement}.

- `ModraUp::Texture#filename` — Texture path. This retains the string passed to {ModraUp::Material#texture=}.
- `ModraUp::Texture#width` — Tile width, inches.
- `ModraUp::Texture#height` — Tile height, inches.
- `ModraUp::Texture#image_width` — Image pixel width. Read from the PNG/JPEG header; defaults to 0 if not readable.
- `ModraUp::Texture#image_height` — Image pixel height. Read from the PNG/JPEG header; returns 0 if not readable.
- `ModraUp::Texture#average_color` — The average RGB values of the decoded pixels. Returns +nil+ if decoding fails.
- `ModraUp::Texture#image_rep` — Decodes to a {ModraUp::ImageRep}. If +colorized+ is true and the material is colored, it applies HLS colorization (SHIFT/TINT) as defined by {ModraUp::Material#colorize_type}.
- `ModraUp::Texture#size=` — Set the tile inch size. Use a single value to scale by the width while maintaining the aspect ratio; use an array to set the width and height separately.
- `ModraUp::Texture#write` — Write the texture file. If +colorize+ is false or the material is not colored, write the bytes as is; if the material is colored and +colorize+ is true, decode the bytes, then apply HLS colorization as specified by {ModraUp::Material#colorize_type} and re-encode.
- `ModraUp::Texture#valid?` — Returns true if the material still has a texture.

## `ModraUp::TextureWriter` · OS3D

Write textures on faces, groups, and component instances. Created by {ModraUp.create_texture_writer}.

- `ModraUp::TextureWriter#load` — Loads an entity's texture. For faces, pass true for +side+ to use the front material, or false for the back. Handles start at 1. Returns +0+ on failure.
- `ModraUp::TextureWriter#write` — Write the texture that has been {#load} to the file based on the file extension. For a two-parameter call, write the front side; for a three-parameter call with the +side+ parameter set to +true+, write the front side, and set to +false+ to write the back side. Returns {FILE_WRITE_OK} / {FILE_WRITE_FAILED_INVALID_TYPE} / {FILE_WRITE_FAILED_UNKNOWN}.
- `ModraUp::TextureWriter#write_all` `OS3D` — Write the loaded textures to the directory. Returns the number of files written.
- `ModraUp::TextureWriter#length` — Number of textures loaded.
- `ModraUp::TextureWriter#count` — Alias for {#length}.
- `ModraUp::TextureWriter#handle` — Returns the handle of a loaded entity. Set +side+ to +false+ for its back face. Returns +0+ if the entity has not been loaded.
- `ModraUp::TextureWriter#filename` — The texture path loaded during {#load}. An invalid handle is represented as an empty string.
- `ModraUp::TextureWriter::FILE_WRITE_OK` — ModraUp::TextureWriter::FILE_WRITE_OK = 0
- `ModraUp::TextureWriter::FILE_WRITE_FAILED_INVALID_TYPE` — ModraUp::TextureWriter::FILE_WRITE_FAILED_INVALID_TYPE = 1
- `ModraUp::TextureWriter::FILE_WRITE_FAILED_UNKNOWN` — ModraUp::TextureWriter::FILE_WRITE_FAILED_UNKNOWN = 2

## `ModraUp::Tool` · OS3D

Callback list for custom tools. SketchUp's official API does not have this class (cannot be written as

- `ModraUp::Tool#activate` — This method is called when the tool is selected by {ModraUp::Model#select_tool}. It is suitable for initializing the tool's state.
- `ModraUp::Tool#deactivate` — Called when switching to another tool or by +select_tool(nil)+.
- `ModraUp::Tool#draw` — Redraw temporary graphics in the viewport when the tool is drawn. SketchUp requires implementing {#getExtents} when drawing outside the model's bounding box; {#getExtents} is called before drawing.
- `ModraUp::Tool#enableVCB?` — Controls input in the Measurements box (VCB). Implementing {#onUserText} enables input. Implement this method to return +false+ when the tool is not ready, for example before the first click. If omitted, the box stays enabled when the tool implements {#onUserText}. Empty callbacks inherited from {ModraUp::Tool} do not count as implementations.
- `ModraUp::Tool#getExtents` — Tell SketchUp how large the temporary graphics are to avoid being clipped. This can be omitted if there is no temporary drawing.
- `ModraUp::Tool#getInstructorContentDirectory` — Directory where the instructor panel HTML content is located. It is queried when activated; the directory is loaded when the "Window / Instructor" opens.
- `ModraUp::Tool#getMenu` — Provides a tool's own right-click menu. If implemented, only the items added by this method are displayed, and they do not mix with the default menu or {UI.add_context_menu_handler}. If not implemented, the default menu is displayed based on the hit object or blank area.
- `ModraUp::Tool#onCancel` — Cancel the current operation. +reason+: +0+ Esc, +1+ reselecting the same tool, +2+ undo (before an undo operation).
- `ModraUp::Tool#onKeyDown` — Press the keyboard. To read a value from VCB, implement {#onUserText} instead of this method. Return true for Esc to prevent triggering {#onCancel}. Use top-level {VK_SHIFT} instead of writing +ModraUp::VK_SHIFT+.
- `ModraUp::Tool#onKeyUp` — Release the keyboard.
- `ModraUp::Tool#onLButtonDoubleClick` — Left mouse button double-click.
- `ModraUp::Tool#onLButtonDown` — Left mouse button down. +flags+ contains {MK_LBUTTON}, {CONSTRAIN_MODIFIER_MASK}, etc.
- `ModraUp::Tool#onLButtonUp` — Left mouse button released. DC Interact performs onclick here.
- `ModraUp::Tool#onMButtonDoubleClick` — Mouse middle button double-click.
- `ModraUp::Tool#onMButtonDown` — Mouse middle button down.
- `ModraUp::Tool#onMButtonUp` — Mouse middle button up.
- `ModraUp::Tool#onMouseEnter` — The mouse pointer entered the viewport.
- `ModraUp::Tool#onMouseLeave` — The mouse pointer has left the viewport.
- `ModraUp::Tool#onMouseMove` — Called when the pointer moves within the viewport. Use {ModraUp::View#pick_helper} for picking.
- `ModraUp::Tool#onMouseWheel` — Mouse wheel. Returns +true+ if the tool has handled the event.
- `ModraUp::Tool#onRButtonDoubleClick` — Mouse right button double-click.
- `ModraUp::Tool#onRButtonDown` — Right mouse button down. Implement with {#getMenu} to customize the menu.
- `ModraUp::Tool#onRButtonUp` — Right button up.
- `ModraUp::Tool#onReturn` — The user presses Return. When the measurement box is open, pressing Return exits it without calling this method. {#onUserText}
- `ModraUp::Tool#onSetCursor` — The host calls this after a mouse event to change the cursor using `UI.set_cursor`.
- `ModraUp::Tool#onUserText` — The user inputs a measurement in the measurement box and presses Enter. Calling this method opens the measurement box (similar to SketchUp's engine). Pass the current text within the box, including the value set by {ModraUp.vcb_value=} which should be entered by pressing Enter.
- `ModraUp::Tool#resume` — The tool becomes the current tool again after {ModraUp::Tools#pop_tool}.
- `ModraUp::Tool#suspend` — Called when {ModraUp::Tools#push_tool} pushes this tool onto the stack.

## `ModraUp::Tools`

Model tool manager. Obtain it from {ModraUp::Model#tools}. Ruby custom tool protocol see {ModraUp::Tool}.

- `ModraUp::Tools#add_observer` — Register {ModraUp::ToolsObserver}. Adding the same object a second time returns +false+.
- `ModraUp::Tools#remove_observer` — Remove tool observers.
- `ModraUp::Tools#active_tool` — The current Ruby tool activated by {ModraUp::Model#select_tool} (protocol see {ModraUp::Tool}). Built-in C++ tools are +nil+.
- `ModraUp::Tools#push_tool` — Push the Ruby tool to the top of the stack, saving the current Ruby or built-in tool. If the Ruby tool implements +suspend(view)+, it will be suspended.
- `ModraUp::Tools#pop_tool` — Pop the current Ruby tool, restoring the stack to the previous Ruby or built-in tool; the Ruby tool will receive +resume+. Returns the popped Ruby tool. Returns nil if the current tool is built-in, and nil if the stack is empty, reverting to the select tool.
- `ModraUp::Tools#active_tool_id` — Current tool ID. The Ruby tool ID is 0. Built-in tools use SketchUp common IDs (select 21022, move 21048, scale 21236, etc.).
- `ModraUp::Tools#active_tool_name` — The current tool name. Ruby tools are named after their class names, while built-in tools are named in English.
- `ModraUp::Tools#model` — This tool manager belongs to the model.

## `ModraUp::ToolsObserver`

Tools Observer. Registered with {ModraUp::Tools#add_observer}. The +onActiveToolChanged+ parameter is +(tools, tool_name, tool_id)+ (consistent with SketchUp).

- `ModraUp::ToolsObserver#onActiveToolChanged` — Called when the active tool changes. The built-in move tool has the name +"MoveTool"+ and id 21048.
- `ModraUp::ToolsObserver#onToolStateChanged` — Tool gesture state. 1 for start, 0 for end (this pair of values depends on dynamic component scaling/moving).
- `ModraUp::ToolsObserver#onToolListChanged` — Tool list changed. The current host does not dispatch this.

## `ModraUp::UVHelper`

A UVQ point on a face. x/y/z represent U/V/Q; dividing by z gives UV. Created by {Face#get_UVHelper}.

- `ModraUp::UVHelper#get_front_UVQ` — Front UVQ. x/y/z for U/V/Q.
- `ModraUp::UVHelper#get_back_UVQ` — Back UVQ. x/y/z for U/V/Q.

## `ModraUp::Vertex` · `< ModraUp::Entity`

Vertices. {Vertex#position} with topological queries (edge/faces/rings, {Vertex#used_by?}). The parent class is {ModraUp::Entity}, not {ModraUp::Drawingelement}.

- `ModraUp::Vertex#position` — Vertex coordinates.
- `ModraUp::Vertex#common_edge` — Edge between two points.
- `ModraUp::Vertex#curve_interior?` — If the vertex is inside the curve (not an open arc endpoint), return the {ModraUp::ArcCurve}.
- `ModraUp::Vertex#edges` — Return the edges that use this vertex.
- `ModraUp::Vertex#faces` — Returns the faces that use this vertex.
- `ModraUp::Vertex#loops` — Loops that pass through this vertex.
- `ModraUp::Vertex#used_by?` — Does the vertex used by a given edge or face.

## `ModraUp::View` · OS3D

Current viewport. Obtain it from {ModraUp::Model#active_view}.

- `ModraUp::View#pick_helper` — The pick helper bound to this viewport. Calls {ModraUp::PickHelper#do_pick} with coordinates immediately.
- `ModraUp::View#camera` — Current viewport camera. Calling {ModraUp::Camera#set} on the returned object will change the viewport.
- `ModraUp::View#camera=` — Change the viewport camera to +camera+. The array's second item is the transition seconds, which is currently ignored and will switch immediately.
- `ModraUp::View#model` — The model to which this viewport belongs.
- `ModraUp::View#pickray` — Screen point corresponding world ray: [{Geom::Point3d} start point, {Geom::Vector3d} direction].
- `ModraUp::View#screen_coords` — Projects a world point onto the screen. Returns the point's +x+/+y+ coordinates as logical pixels; returns +nil+ on projection failure.
- `ModraUp::View#tooltip` — Viewport tooltip text displayed next to the cursor.
- `ModraUp::View#tooltip=` — Set the viewport tooltip next to the cursor. An empty string will hide it.
- `ModraUp::View#invalidate` — Request the viewport to be redrawn (Tools + Draw+ / Animation).
- `ModraUp::View#vpwidth` — Viewport width (pixels).
- `ModraUp::View#vpheight` — Viewport height (pixels).
- `ModraUp::View#zoom` — Zooms by a factor or frames entities or a selection. A factor greater than 1 zooms in.
- `ModraUp::View#zoom_extents` — Zoom to extents of the entire model, equivalent to filling the viewport.
- `ModraUp::View#add_observer` — Register a {ModraUp::ViewObserver}. Adding the same object a second time returns false. After the camera is closed or the viewport size changes, the +onViewChanged+ method is called; when the DPI changes, the +onScaleFactorChange+ method is called.
- `ModraUp::View#remove_observer` — Removes the observer. Returns +false+ if it was absent.
- `ModraUp::View#refresh` — Request an immediate redraw. Currently, this is equivalent to {#invalidate} and does not guarantee synchronous completion.
- `ModraUp::View#center` — The screen coordinates (logical pixels) of the viewport center.
- `ModraUp::View#corner` — The screen coordinates of the Viewport corner. +index+ can be {CORNER_TOP_LEFT}, etc.
- `ModraUp::View#device_width` — Viewport physical pixel width (logical width × {UI.scale_factor}(view)).
- `ModraUp::View#device_height` — Viewport physical pixel height (logical height × {UI.scale_factor}(view)).
- `ModraUp::View#field_of_view` — Vertical field of view in degrees, same as {ModraUp::Camera#fov}.
- `ModraUp::View#field_of_view=` — Sets the vertical field of view.
- `ModraUp::View#graphics_engine` `OS3D` — Graphics backend. ModraUp fixed +:graphics_engine_classic+ (OpenGL 3.3 + QPainter overlay).
- `ModraUp::View#pixels_to_model` — Convert logical pixel dimensions to the model length at the +point+ location.
- `ModraUp::View#guess_target` — Guess the user's target point in the model. Use the camera's target if no screen point is provided; otherwise, cast a ray from the screen point, or fall back to z=0 or the camera's target.
- `ModraUp::View#dynamic=` — Deprecated, ignore.
- `ModraUp::View#average_refresh_time` — Average refresh duration in milliseconds. Returns 0.0 before any measurements are available.
- `ModraUp::View#last_refresh_time` — Duration of the last complete refresh in milliseconds. In SketchUp, passing true for +full+ includes the entire frame. ModraUp currently returns 0.0.
- `ModraUp::View#animation=` — Set the animation object and start the clock. The host ticks with `+next(view)+`; if there is no `+next+`, it ticks with `+nextFrame(view)+`.
- `ModraUp::View#show_frame` — Request the next frame in the animation callback. If +delay+ is given in seconds (default is none, meaning as soon as possible), it will wait for that duration before the next tick.
- `ModraUp::View#drawing_color=` — Sets the color used by {#draw}. Accepts a {ModraUp::Color}, +[r, g, b]+ / +[r, g, b, a]+ array, or an English color name. The fourth item in the array corresponds to {ModraUp::Color#alpha=} and can be 0–255 or 0.0–1.0.
- `ModraUp::View#line_width=` — Sets the line width for {#draw} in logical pixels.
- `ModraUp::View#line_stipple` — Current {#draw} line stipple. An empty string represents solid lines.
- `ModraUp::View#line_stipple=` — Sets the {#draw} line pattern. Valid values are the same as in SketchUp:
- `ModraUp::View#set_color_from_line` — Set the draw color to the red/green/blue axis color based on the direction defined by two points.
- `ModraUp::View#draw` — Draw 3D geometry. Valid in {ModraUp::Tool#draw} or an active {ModraUp::Overlay#draw}.
- `ModraUp::View#draw2d` — Draw primitives on screen coordinates. Valid in {ModraUp::Tool#draw} or an enabled {ModraUp::Overlay#draw}.
- `ModraUp::View#draw_line` — Draw a polyline. Point types are the same as for #draw; +nil+ skips the point.
- `ModraUp::View#draw_polyline` — Same as {#draw_line}.
- `ModraUp::View#draw_lines` — Draw line segments by points. The point types are the same as for #draw; +nil+ skips the point.
- `ModraUp::View#draw_points` — Draw screen points. +style+: 1 empty square, 2 solid square, 3 cross, 4 plus, 5 star, 6 empty triangle, 7 solid triangle.
- `ModraUp::View#draw_text` — Draw text on the screen coordinates. The +options+ can contain :font, :size, :pixel_size, :point_size, :bold, :align, :vertical_align, and :color.
- `ModraUp::View#text_bounds` — Calculate the text box in screen coordinates for {#draw_text}. The +point+ is in viewport pixels (Z ignored).
- `ModraUp::View#load_texture` — Load an image as a texture into the viewport, returning a handle. Returns +0+ if the file does not exist, cannot be decoded, is an empty {ModraUp::ImageRep}, or has no host.
- `ModraUp::View#release_texture` — Release the {#load_texture} handle. Return +false+ if the unknown ID or host is invalid.
- `ModraUp::View#write_image` `OS3D` — Write the current 3D frame buffer as an image. Returns +false+ if host fails or capture fails.
- `ModraUp::View#inputpoint` — Creates a {ModraUp::InputPoint}. Supplying coordinates immediately calls {ModraUp::InputPoint#pick}.
- `ModraUp::View#inference_locked?` — Returns whether inference is locked by {#lock_inference}.
- `ModraUp::View#lock_inference` — Unlocks with no parameters. Releases adsorption types on the RGB axes with a single click; locks on the axes if two points are close. Diagonal edges and faces are held until they are fully defined.
- `ModraUp::View::CORNER_TOP_LEFT` — ModraUp::View::CORNER_TOP_LEFT = 0
- `ModraUp::View::CORNER_TOP_RIGHT` — ModraUp::View::CORNER_TOP_RIGHT = 1
- `ModraUp::View::CORNER_BOTTOM_LEFT` — ModraUp::View::CORNER_BOTTOM_LEFT = 2
- `ModraUp::View::CORNER_BOTTOM_RIGHT` — ModraUp::View::CORNER_BOTTOM_RIGHT = 3

## `ModraUp::ViewObserver`

Base class for View Observers. Subclasses implement +onViewChanged+ and +onScaleFactorChange+.

- `ModraUp::ViewObserver#onViewChanged` — Called when the camera is translated, rotated, scaled, or when the viewport pixel size changes (includes dimensions since SketchUp 2019.2).
- `ModraUp::ViewObserver#onScaleFactorChange` — Called when the DPI of the screen containing the viewport changes, synchronizing with {UI.scale_factor(view)}.

## `Numeric`

Unit conversion methods for Ruby numbers. Bare coordinates are measured in inches. In +Geom::Point3d.new(1, 0, 0)+ the X coordinate is one inch. Passing +25.4.mm+ to {Geom::Point3d.new} specifies the same distance as a {Length}.

- `Numeric#mm` — Treat the number as millimeters to get the internal inches Length. +25.4.mm + is 1 inch.
- `Numeric#cm` — Treat the number as centimeters.
- `Numeric#m` — Treat the numbers as meters.
- `Numeric#km` — Treat the number as kilometers.
- `Numeric#inch` — Treat the number as inches. Same as {#to_l}.
- `Numeric#feet` — Treat the number as feet (1 foot = 12 inches).
- `Numeric#yard` — Treat numbers as codes (1 code = 36 inches).
- `Numeric#mile` — Treat the numbers as miles.
- `Numeric#to_mm` — Convert itself from inches to millimeters.
- `Numeric#to_cm` — Convert itself from inches to centimeters.
- `Numeric#to_m` — Convert itself from inches to meters.
- `Numeric#to_km` — Convert itself from inches to kilometers.
- `Numeric#to_inch` — Convert itself to inches, yielding the value in inches (numeric value remains unchanged).
- `Numeric#to_feet` — Convert itself to feet from inches.
- `Numeric#to_yard` — Convert itself to yards by dividing by 36 inches.
- `Numeric#to_mile` — Convert itself to miles from inches.
- `Numeric#to_mm2` — Convert itself from square inches to square millimeters.
- `Numeric#to_cm2` — Convert itself to square inches and then convert to square centimeters.
- `Numeric#to_m2` — Convert itself to square meters from square inches.
- `Numeric#to_km2` — Convert itself from square inches to square kilometers.
- `Numeric#to_inch2` — Convert itself to square inches, yielding the value in square inches (numeric value remains unchanged).
- `Numeric#to_feet2` — Convert itself to square feet from square inches.
- `Numeric#to_yard2` — Convert itself from square inches to square yards.
- `Numeric#to_mile2` — Convert itself to square miles from square inches.
- `Numeric#to_l` — Treat the number as inches to get Length.
- `Numeric#degrees` — Convert degrees to radians. +90.degrees is approximately π/2.
- `Numeric#radians` — Convert radians to degrees.

## `Sketchup` · OS3D

Compatibility alias for {ModraUp}.


## `SketchupExtension`

Metadata for a Ruby extension. The host loads the implementation in +app/resources/Tools/modraup_extensions.rb+ at startup. Plugin code can require +extensions.rb+ for compatibility. Pass the extension to {ModraUp.register_extension} to register it and optionally load it immediately.

- `SketchupExtension#initialize`
- `SketchupExtension#check` — Check the extension. If not registered, {ModraUp.require} +@path+; if registered, call {ModraUp.register_extension}. Returns +true+ if already loaded.
- `SketchupExtension#uncheck` — Call {ModraUp.register_extension}(self, false) when registered to prevent automatic loading on the next startup. If not registered, it does nothing. The scripts executed in the current process will not be unloaded.
- `SketchupExtension#loaded?` — Has the Ruby Sketchup extension already been +require+?
- `SketchupExtension#load_on_start?` — Returns whether the extension loads automatically on startup (checked state in Extension Manager).
- `SketchupExtension#registered?` — Has {ModraUp.register_extension} already been called.
- `SketchupExtension#id` — Extension ID. Can be read from the +extension_info.txt+ in the plugin directory, with a default value of an empty string.
- `SketchupExtension#version_id` — Extension version ID. Can be read from the +extension_info.txt+ in the plugin directory, defaulting to an empty string.

## `String`

SketchUp adds a `{String#to_l}` method to String, parsing the text into a `{Length}` based on the current model units.

- `String#to_l` — Parse the string into a length. Use the unit (mm/cm/m/in/ft/' etc.) if it has a suffix, otherwise use the current model unit. Internally, it remains in inches. Return zero length for an empty string or a string containing only spaces.

## `Test`

The hidden testing module for SketchUp.


## `UI`

Host interface for menus, dialogs, toolbars, HTML windows, clipboard access, and timers.

- `UI.menu` — Fetch the top-level menu. Common entries include +"Plugins"+ / +"Extensions"+ / +"Tools"+ / +"View"+.
- `UI.messagebox` — Display a message box. Return {IDOK} if no host is present.
- `UI.inputbox` — Multiline input. Returns +false+ if canceled or no host.
- `UI.openpanel` — Open the file dialog box. Return +nil+ if canceled.
- `UI.savepanel` — Save file dialog. Cancel returns +nil+.
- `UI.select_directory` — Select directory. Hash key +:title+ / +:directory+ / +:select_multiple+.
- `UI.openURL` — Open the URL in the system browser.
- `UI.beep` — System beep.
- `UI.play_sound` — Plays a local sound file.
- `UI.start_timer` — Start the timer and return a handle to {UI.stop_timer}.
- `UI.stop_timer` — Stop the timer returned by {UI.start_timer}.
- `UI.scale_factor` — Returns +1.0 (as of SketchUp 2025, this is compatible padding: screen coordinates are already logical pixels). When passed a {ModraUp::View}, returns the scale factor of the viewport's screen (commonly +2.0 on Retina displays).
- `UI.get_clipboard_data` — Read clipboard text.
- `UI.set_clipboard_data` — Write text to the clipboard.
- `UI.create_cursor` — Create a cursor from an image file and return a handle to {UI.set_cursor}.
- `UI.set_cursor` — Set the current cursor.
- `UI.toolbar` — Retrieve the toolbar by name; if it doesn't exist, create one (category defaults to "Modeling").
- `UI.toolbar_names` — The currently registered toolbar names.
- `UI.toolbar_visible?` — Whether the toolbar is visible.
- `UI.set_toolbar_visible` — Show or hide the toolbar.
- `UI.refresh_toolbars` — Recalculate the enabled and checked states of the Ruby toolbar commands.
- `UI.refresh_inspectors` — Refresh the inspectors panel.
- `UI.inspector_names` — Names of inspectors that can be opened.
- `UI.show_inspector` — Open the specified inspector.
- `UI.model_info_pages` — The page name for the model information dialog.
- `UI.show_model_info` — Open the model information and switch to that page.
- `UI.preferences_pages` — Name of the preference settings page.
- `UI.show_preferences` — Open the preferences and switch to that page.
- `UI.show_extension_manager` — Open the Extension Manager.
- `UI.show_extension_warehouse` — Open the Extension Warehouse (optionally navigate to a specific extension id).
- `UI.add_context_menu_handler` — Right-click menu callback. Called by default on a right-click in the viewport when hitting a solid entity; not called if the current tool implements {ModraUp::Tool#getMenu} for blank areas or the current tool.
- `UI::MB_OK` — MB_OK = 0
- `UI::MB_OKCANCEL` — MB_OKCANCEL = 1
- `UI::MB_ABORTRETRYIGNORE` — MB_ABORTRETRYIGNORE = 2
- `UI::MB_YESNOCANCEL` — MB_YESNOCANCEL = 3
- `UI::MB_YESNO` — MB_YESNO = 4
- `UI::MB_RETRYCANCEL` — MB_RETRYCANCEL = 5
- `UI::MB_MULTILINE` — MB_MULTILINE = 6
- `UI::IDOK` — IDOK = 1
- `UI::IDCANCEL` — The cancel value corresponding to IDOK.
- `UI::IDABORT` — Return value of {UI.messagebox} when the user chooses Abort.
- `UI::IDRETRY` — Return value of {UI.messagebox} when the user chooses Retry.
- `UI::IDIGNORE` — Return value of {UI.messagebox} when the user chooses Ignore.
- `UI::IDYES` — Return value of {UI.messagebox} when the user chooses Yes.
- `UI::IDNO` — Return value of {UI.messagebox} when the user chooses No.
- `UI::TB_HIDDEN` — TB_HIDDEN = 0
- `UI::TB_VISIBLE` — TB_VISIBLE = 1
- `UI::TB_NEVER_SHOWN` — TB_NEVER_SHOWN = -1

## `UI::Command`

A command with a menu label, tooltip, icon, and Ruby block to run when clicked. Attach it to a toolbar with {UI::Toolbar#add_item}.

- `UI::Command#initialize` — The block must be provided to be called when clicked.
- `UI::Command#menu_text` — Text on the menu or button.
- `UI::Command#menu_text=` — Set the menu/button text.
- `UI::Command#tooltip` — Hover tooltip.
- `UI::Command#tooltip=` — Set the tooltip for the command.
- `UI::Command#status_bar_text` — Status bar description.
- `UI::Command#status_bar_text=` — Set the status bar summary.
- `UI::Command#small_icon` — Path to the small icon (may be an empty string).
- `UI::Command#small_icon=` — Set the small icon file for the toolbar. Must be assigned before using {UI::Toolbar#add_item}; the path must exist.
- `UI::Command#large_icon` — Path to the large icon (may be an empty string).
- `UI::Command#large_icon=` — Set the large icon file for the toolbar. If no +small_icon+ is provided, the toolbar will use this path.
- `UI::Command#proc` — A block to be called when the command is invoked.
- `UI::Command#set_validation_proc` — Set the validation block, which should return {MF_ENABLED} or similar.
- `UI::Command#get_validation_proc` — Current validation block.
- `UI::Command#extension` — Associated {SketchupExtension} (optional).
- `UI::Command#extension=` — Record the associated extension.

## `UI::HtmlDialog`

Embedded CEF HTML window. Will raise an error during {#initialize} if there is no UI bridge.

- `UI::HtmlDialog#initialize` — Hash keys: `dialog_title` / `preferences_key` / `width` / `height` / `left` / `top` / `min_width` / `min_height` / `max_width` / `max_height` / `resizable` / `scrollable` / `use_content_size` / `style`.
- `UI::HtmlDialog#set_html` — Load the HTML string.
- `UI::HtmlDialog#set_file` — Load from a local file.
- `UI::HtmlDialog#set_url` — Load the URL.
- `UI::HtmlDialog#show` — Non-modal display.
- `UI::HtmlDialog#show_modal` — Shows the dialog modally. Afterward, {#hide} is unavailable.
- `UI::HtmlDialog#hide` — Hide the non-modal dialog box.
- `UI::HtmlDialog#close` — Close and destroy.
- `UI::HtmlDialog#visible?` — Visibility.
- `UI::HtmlDialog#bring_to_front` — Bring to front.
- `UI::HtmlDialog#center` — Center in the viewport.
- `UI::HtmlDialog#set_size` — Set the window size.
- `UI::HtmlDialog#get_size` — +[width, height]+。
- `UI::HtmlDialog#set_position` — Set the window position.
- `UI::HtmlDialog#get_position` — +[left, top]+。
- `UI::HtmlDialog#get_content_size` — Size of the content area.
- `UI::HtmlDialog#set_content_size` — Set the content area size.
- `UI::HtmlDialog#execute_script` — Execute JavaScript in the page.
- `UI::HtmlDialog#add_action_callback` — Register a JS-callable callback. The block's first parameter is currently `nil`.
- `UI::HtmlDialog#set_on_closed` — A block to be called when the dialog is closed.
- `UI::HtmlDialog#set_can_close` — Returns false to prevent closing.
- `UI::HtmlDialog::STYLE_DIALOG` — STYLE_DIALOG = 0
- `UI::HtmlDialog::STYLE_WINDOW` — STYLE_WINDOW = 1
- `UI::HtmlDialog::STYLE_UTILITY` — STYLE_UTILITY = 2
- `UI::HtmlDialog::CEF_VERSION` — Embedded CEF version string (may be rewritten by the host after startup).
- `UI::HtmlDialog::CHROME_VERSION` — Embedded Chrome version string (may be rewritten by the host after startup).

## `UI::HtmlPanel` · OS3D

HTML panel in the Ruby UI workspace. SketchUp does not have this class.

- `UI::HtmlPanel#initialize` `OS3D` — Hash keys: `+title+` / `+preferences_key+` / `+height+` (integer or `+:auto+`) / `+fill_height+`.
- `UI::HtmlPanel#set_html` `OS3D` — Load the HTML string.
- `UI::HtmlPanel#set_file` `OS3D` — Load from a local file.
- `UI::HtmlPanel#set_url` `OS3D` — Load the URL.
- `UI::HtmlPanel#show` `OS3D` — Shows the tray panel.
- `UI::HtmlPanel#hide` `OS3D` — Hides the tray panel.
- `UI::HtmlPanel#close` `OS3D` — Close and destroy.
- `UI::HtmlPanel#visible?` `OS3D` — Visibility.
- `UI::HtmlPanel#execute_script` `OS3D` — Execute JavaScript in the page.
- `UI::HtmlPanel#add_action_callback` `OS3D` — Register a JS-callable callback.
- `UI::HtmlPanel#set_on_closed` `OS3D` — A block to be called when the dialog is closed.

## `UI::Notification`

Extend the notification bar. It will not dismiss if the timeout expires without calling the `dismiss` block.

- `UI::Notification#initialize`
- `UI::Notification#message` — Body.
- `UI::Notification#message=` — Set the summary.
- `UI::Notification#icon_name` — Icon path.
- `UI::Notification#icon_name=` — Set the icon path.
- `UI::Notification#icon_tooltip` — Icon tooltip.
- `UI::Notification#icon_tooltip=` — Set the icon tooltip.
- `UI::Notification#on_accept` — Title of the Accept button and its callback.
- `UI::Notification#on_dismiss` — Title of the close button and callback. Dismisses without calling the callback after a timeout.
- `UI::Notification#on_accept_title` — The current title of the accept button.
- `UI::Notification#on_dismiss_title` — Title of the close button.
- `UI::Notification#show` — Display the notification. Return +false+ if no host is available.

## `UI::Toolbar` · OS3D

Plugin Toolbar: A set of {UI::Command} objects, displayed as draggable cards in the studio top bar (not floating Qt toolbars).

- `UI::Toolbar#initialize` `OS3D` — Creates a toolbar by name. The optional +category+ argument is a ModraUp extension. Reusing a name shares the existing toolbar. Passing +category+ explicitly updates its category. Omitting it preserves the existing category. On first creation, the default is the Modeling tab (Ruby string +"\u5efa\u6a21"+). An empty category also selects that tab. Pass +"Layout"+ or +"\u51fa\u56fe"+ for the drawing workspace tab. Other names create a tab after it, or reuse a tab of the same name.
- `UI::Toolbar#name` — Toolbar name.
- `UI::Toolbar#category` `OS3D` — Returns the current category name. The default is +"\u5efa\u6a21"+ (Modeling). Toolbars with the same name share their category.
- `UI::Toolbar#add_item` — Add the {UI::Command} to the toolbar. The icon should be set before this.
- `UI::Toolbar#add_separator` — Add a separator.
- `UI::Toolbar#show` — Display the toolbar (studio card, not a floating Qt toolbar).
- `UI::Toolbar#hide` — Hide the toolbar.
- `UI::Toolbar#visible?` — Visibility.
- `UI::Toolbar#restore` — Same as {#show}.
- `UI::Toolbar#each` — Iterate through the added {UI::Command} instances.
- `UI::Toolbar#length` — Number of commands.
- `UI::Toolbar#size` — Alias for {#length}.
- `UI::Toolbar#get_last_state` — Last Displayed State: {TB_HIDDEN} / {TB_VISIBLE} / {TB_NEVER_SHOWN}.

## `UI::WebDialog`

SketchUp Legacy WebDialog (summarized). The old version of the webpage dialog box (replaced by {UI::HtmlDialog}, still available for older plugins). Public methods are defined by the SketchUp signature and are redirected to `_native_*` via Ruby code.


