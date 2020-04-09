class Ship < ActiveRecord::Base
    has_many :crew_members
    #CREATE
        #Ship.new({hash})
        #Ship.create({hash})
    #READ
         #Ship.find_by(id,{hash},string)
         #Ship.all
    #UPDATE
        #Ship.update({colname:value})
        #Ship#update({hash})
        #Ship#save()
    #DELETE
        #Ship.destroy_all
        #Ship#destroy
end 