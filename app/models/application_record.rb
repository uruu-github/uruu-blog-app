# class ApplicationRecord < ActiveRecord::Base
#   primary_abstract_class
# end

#こっちに修正 20240728
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
