# C4 model for the Streamliner Cloud Product 
# Online cloud workspace can be found at https://structurizr.com/share/99553/3e35d378-6687-47b7-95e2-d7a3b60f23a9
# 
# Created by Erik Lenaerts (erik.lenaerts@streamsoftware.be)

workspace extends https://raw.githubusercontent.com/eriklenaerts/ssw-c4/refs/heads/main/model.dsl {
    name "Streamliner Cloud" 
    description "The online platform from Stream Software"

    model {
        !element customsProduct {
            url https://structurizr.com/share/99553/3e35d378-6687-47b7-95e2-d7a3b60f23a9/diagrams#SystemContext-001
        }
    }

    views {
        systemlandscape "SystemLandscape" {
            include *
        }

        #filtered "SystemLandscape" include "Principal, Customer, Stream Software, Relationship" "systemlandscape2" "High level system landscape"
        #filtered "SystemLandscape" include "Element, Relationship" "systemlandscape3" "High level system landscape"

        styles {
            element "Person" {
                color #ffffff
                fontSize 22
                shape Person
            }

            element "Party" {
                background #999999
            }

            element "Customer" {
                background #0051c2
            }


            element "External System" {
                background #999999
                color #ffffff
            }

            element "Stream Software" {
                background #0051c2
                color #ffffff
            }

            element "Group:Stream Software" {
                color #0051c2
            }
        }
    }
}