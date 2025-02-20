# C4 model for the Streamliner Cloud Product 
# Online cloud workspace can be found at https://structurizr.com/share/99553/3e35d378-6687-47b7-95e2-d7a3b60f23a9
# 
# Created by Erik Lenaerts (erik.lenaerts@streamsoftware.be)

workspace {
    name "Streamliner Cloud" 
    description "The online platform from Stream Software"

    model {
        group "Customs" {
            customsOfficer = person "Customs officer" "The national customs authority" "Party, Customs"

            customsSystem = softwareSystem "Customs system" "The system of the national customs that processes the declarations of goods" "External system, Customs, CustomsSystem"
        }

        group "Principal" {
            principal = person "Principal" "The party where the declaration requests originates from" "Party, Principal"

            principalERPSystem = softwareSystem "Principal ERP system" "External system, Principal"
        }

        group "Customer" {
            customer = person "Customer" "The party that manages consignments and declares goods to customs" "Party, Customer"
    
            customerEmailSystem = softwareSystem "Customer e-mail system" "External system, Customer"
            customerERPSystem = softwareSystem "Customer ERP system" "External system, Customer"
        }

        group "Stream Software" {
            customerSupportStaff = person "Customer Support Staff" "Customer support staff within Stream Softwarer" "Party, Stream Software"

            customsProduct = softwareSystem "Customs Product" "Collection of customs applications and business modules" "Stream Software"
            complianceProduct = softwareSystem "Compliance Product" "Collection of compliance applications and business modules" "Stream Software"
        }

        # relationships between people and products
        principal -> customerEmailSystem "Request for declaration of goods"
        principal -> principalERPSystem "Manage shipments" 
        principal -> customer "Request for declaration of goods over e.g. phone"
        principalERPSystem -> customerERPSystem "Request for declaration of goods via data exchange"
        # principalERPSystem -> customerEmailSystem "Request for declaration of goods via e-mail"

        customer -> customsProduct "Manage consignments and declare goods"
        customer -> complianceProduct "Uses this to conform to the compliancy rules"
        customer -> customerSupportStaff "Request support"
        customer -> customerERPSystem "Handle declaration requests"
        customer -> customerEmailSystem "Handle declaration requests"
        customerERPSystem -> customsProduct "Send declaration request via data exchange"
        customerEmailSystem -> customsProduct "Send declaration request via e-mail"

        customsOfficer -> complianceProduct "Uses this to verify compliancy actions taken"
        customsProduct -> customsSystem "Declare goods" 
        customsProduct -> customer "Notify declaration status"
        customer -> principal "Inform about declaration status"
        customerSupportStaff -> customsProduct "Support customers"
    }
}