workspace "Consignment" "Description" {

    !identifiers hierarchical

    model {
        declarant = person "Declarant" "A person who submits a declaration to the customs"
    
        authSvc = softwareSystem "Authentication Service" {
            tags "Microsoft Azure - Azure Active Directory"
        }
    
        consignmentApp = softwareSystem "Consignment App" {
            consignmentBackend = container "Consignment Backend" {
                technology ".net Core"
                tags "Backend Service"
                description "???"
            }

            consignmentBff = container "Consignment BFF" {
                technology ".net Core"
                tags "API"
                description "???"
            }
            
            portal = container "Portal" {
                technology "React"
                tags "Web Application"
                description "Main app to manage consignments"
            }

            portalGateway = container "Portal Gateway" {
                technology ".net Core"
                tags "Infrastructure"
                description "Gateway to ...todo"
            }
            

            dmsBackend = container "DMS Backend" {
                technology ".net Core"
                tags "Backend Service"
                description "??"
            }

            dmsBff = container "DMS BFF" {
                technology ".net Core"
                tags "API"
                description "??"
            }
            

            simulator = container "Simulator" {
                technology ".net Core"
                tags "Application"
                description "??"
            }
           
            masterData = container "Master data" {
                tags "Microsoft Azure - Blob Block" "Master data"
                technology "Azure Blob storage"
            }
                        
            referenceData = container "Reference data" {
                tags "Microsoft Azure - Blob Block" "Reference data"
                technology "Azure Blob storage"
            }
                        
            // database = container "Database Schema" {
            //     tags "Database"
            // }          
        }
    
        
        declarant -> consignmentApp.portal "uses" "html, https"
        consignmentApp.portal -> consignmentApp.portalGateway "??" "REST, https"
        consignmentApp.portalGateway -> consignmentApp.consignmentBff "??" "REST, https"
        consignmentApp.portalGateway -> consignmentApp.dmsBff "??" "REST, https"
        consignmentApp.dmsBff -> consignmentApp.dmsBackend "??" "Async Messaging"
        consignmentApp.referenceData -> consignmentApp.dmsBff "uses" "??"
        consignmentApp.referenceData -> consignmentApp.dmsBackend "uses" "??"
        consignmentApp.dmsBff -> consignmentApp.masterData "maintains" "??"
        consignmentApp.dmsBackend -> consignmentApp.masterData "maintains" "??"
        consignmentApp.dmsBackend -> consignmentApp.simulator "??" "Async Messaging" "NServiceBus"
        consignmentApp.dmsBackend -> consignmentApp.consignmentBackend "??" "Async Messaging"


        /*
        accEnvironment = deploymentEnvironment "Acc" {
            deploymentNode "Microsoft Azure" {
                tags "Microsoft Azure - Cloud Services (Classic)"   
                
                region = deploymentNode "EU-West-1" {
                    tags "Microsoft Azure - Region Management"
                    dns = infrastructureNode "DNS router" {
                        technology "DNS Private resolver"
                        description "Routes incoming requests based upon domain name."
                        tags "Microsoft Azure - DNS Private Resolver"
                    }

                    lb = infrastructureNode "Load Balancer" {
                        technology "Load Balancers"
                        description "Automatically distributes incoming application traffic."
                        tags "Microsoft Azure - Load Balancers"
                        dns -> this "Forwards requests to" "HTTPS"
                    }

                    deploymentNode "Autoscaling group" {
                        tags "Amazon Web Services - Auto Scaling"

                        deploymentNode "Amazon EC2 - Ubuntu server" {
                            tags "Amazon Web Services - EC2"

                            webApplicationInstance = containerInstance consignmentApp.consignmentWebApp {
                                lb -> this "Forwards requests to" "HTTPS"
                            }
                        }
                    }

                    deploymentNode "Amazon RDS" {
                        tags "Amazon Web Services - RDS"

                        deploymentNode "MySQL" {
                            tags "Amazon Web Services - RDS MySQL instance"

                            databaseInstance = containerInstance consignmentApp.consignmentWebAppBff
                        }
                    }

                    
                }
            }
        }
        */
    }

    configuration {
        scope softwaresystem
    }
    
    views {
        systemContext consignmentApp "Diagram1" {
            include *
            autolayout lr
        }
        
        container consignmentApp "Diagram2" {
            include *
            autolayout lr
        }
        
        /*
        deployment consignmentApp accEnvironment "Diagram3" {
            include *
            autolayout lr            
        }
        */

        styles {
        
            element "Element" {
                background #ffffff
                shape RoundedBox
            }
            
            element "Person" {
                background #0051c2
                color white
                shape person
            }

            element "Software System:Consignment App" {
                background #0065f2
                color white
            }
            
            element "Container" {
                background #0065f2
                color white
            }
            
            element "Microsoft Azure - Blob Block" {
                background #ffffff
                stroke #0078d4
                color #0078d4
            }

            element "Database" {
                shape cylinder
            }
        }
        
        theme https://static.structurizr.com/themes/microsoft-azure-2023.01.24/theme.json
    }    

}