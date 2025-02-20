# C4 model for the Streamliner Cloud Product 
# Online cloud workspace can be found at https://structurizr.com/share/99553
# 
# Created by Erik Lenaerts (erik.lenaerts@streamsoftware.be)

workspace {
    name "Streamliner Cloud" 
    description "The online platform from Stream Software"

    model {

        group "Stream Software" {
            customerSupportStaff = person "Customer Support Staff" "Customer support staff within Stream Softwarer" "Stream Software staff"

            customsProduct = softwareSystem "Collection of customs applications and business modules"
            complianceProduct = softwareSystem "Collection of compliance applications and business modules"
        }

        user = person "User" "A person that manages consignments and declares goods to customs" "User"
    }
}