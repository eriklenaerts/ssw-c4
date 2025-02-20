# C4 model for the Streamliner Cloud Product 
# Online cloud workspace can be found at https://structurizr.com/share/99553
# 
# Created by Erik Lenaerts (erik.lenaerts@streamsoftware.be)

workspace {
    name "Streamliner Cloud" 
    description "The online customs platform from Stream Software"

    model {
        group "Streamliner Platform" {
            email = softwaresystem "E-mail System" "The cloud based e-mail system" "External system"                
            crossroad = softwaresystem "Crossroad" "System that allow data communication to the national customs authorities." "External System"
            
            # this is more for the deployment diagram
            # platformServices = softwaresystem "Streamliner Cloud Platform" "The collection of platform services" "Microsoft Azure - Resource Groups"
        }

        group "Streamliner Customer Tenant" {
            consignmentSystem = softwaresystem "Consignment System" "The complete sysem to manage shipments and perform declarations" "System"
            
            # this is more for the deployment diagram
            # tenantServices = softwaresystem "Streamliner Cloud Tenant" "The collection of tenant applications, business modules and services" "Microsoft Azure - Resource Groups"
        }

        user = person "User" "A person that is responsible managing consignments and declaring the goods to customs" "User"
        customerSupportStaff = person "Customer Support Staff" "Customer support staff within Stream Softwarer" "Stream Software staff"
    }
}