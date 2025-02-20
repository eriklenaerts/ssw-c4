# C4 model for the Streamliner Cloud Product 
# Online cloud workspace can be found at https://structurizr.com/share/99553/3e35d378-6687-47b7-95e2-d7a3b60f23a9
# 
# Created by Erik Lenaerts (erik.lenaerts@streamsoftware.be)

workspace {
    name "Streamliner Cloud" 
    description "The online platform from Stream Software"

    model {
        group "Customs" {
            customs = person "Customs" "The national customs authority" "Party"

            customsSystem = softwareSystem "Customs system" "The system of the national customs that processes the declarations of goods" "External system"
        }

        group "Principal" {
            principal = person "Principal" "The party where the declaration requests originates from" "Party"

            principalERPSystem = softwareSystem "Principal ERP system" "External system"
        }

        group "Customer" {
            customer = person "Customer" "The party that manages consignments and declares goods to customs" "Party"
    
            customerEmailSystem = softwareSystem "Customer e-mail system" "External system"
            customerERPSystem = softwareSystem "Customer ERP system" "External system"
        }

        group "Stream Software" {
            customerSupportStaff = person "Customer Support Staff" "Customer support staff within Stream Softwarer" "Stream Software staff"

            customsProduct = softwareSystem "Collection of customs applications and business modules"
            complianceProduct = softwareSystem "Collection of compliance applications and business modules"
        }

        # relationships between people and products
        principal -> customerEmailSystem "Request for declaration of goods via e-mail"
        principal -> principalERPSystem "Manage shipments" 
        principalERPSystem -> customerERPSystem "Request for declaration of goods via data exchange"
        principalERPSystem -> customerEmailSystem "Request for declaration of goods via e-mail"

        customer -> customsProduct "Manage consignments and declare goods"
        customer -> complianceProduct "Uses this to conform to the compliancy rules"
        customer -> customerSupportStaff "Request support"
        customer -> customerERPSystem "Handle declaration requests"
        customer -> customerEmailSystem "Handle declaration requests"
        customerERPSystem -> customsProduct "Send declaration request via data exchange"
        customerEmailSystem -> customsProduct "Send declaration request via e-mail"

        customs -> complianceProduct "Uses this to verify compliancy actions taken"
        customer -> customerEmailSystem "Handle declaration request"
        customerSupportStaff -> customsProduct "Support customers"
    }
}