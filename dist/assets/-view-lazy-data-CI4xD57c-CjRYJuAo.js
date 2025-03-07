function e(t){switch(t){case"index":return`direction: down\r
\r
Principal: {\r
  label: "Principal"\r
}\r
Customer: {\r
  label: "Customer"\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
}\r
Customs: {\r
  label: "Customs"\r
}\r
\r
Principal -> Customer: "Request declaration"\r
Customer -> Principal: "Inform declaration status"\r
Customer -> StreamSoftware: "[...]"\r
StreamSoftware -> Customer: "Notify declaration status"\r
StreamSoftware -> Customs: "Declare goods"\r
Customs -> StreamSoftware: "Verify compliancy actions"\r
`;case"systemLandscape":return`direction: right\r
\r
Principal: {\r
  label: "Principal"\r
}\r
Customer: {\r
  label: "Customer"\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
}\r
Customs: {\r
  label: "Customs"\r
}\r
\r
Principal -> Customer: "Request declaration"\r
Customer -> Principal: "Inform declaration status"\r
Customer -> StreamSoftware: "Manage declarations"\r
StreamSoftware -> Customer: "Notify declaration status"\r
StreamSoftware -> Customs: "Declare goods"\r
Customs -> StreamSoftware: "Verify compliancy actions"\r
`;case"detailedSystemLandscape":return`direction: down\r
\r
Principal: {\r
  label: "Principal"\r
}\r
Customs: {\r
  label: "Customs"\r
}\r
Customer: {\r
  label: "Customer"\r
\r
  Person: {\r
    label: "Customer"\r
    shape: person\r
  }\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
\r
  CustomsProduct: {\r
    label: "Customs product"\r
\r
    ConsignmentApp: {\r
      label: "Consignment Application"\r
\r
      PortalGateway: {\r
        label: "Portal Gateway"\r
      }\r
      DmsBff: {\r
        label: "DMS BFF"\r
      }\r
      Service: {\r
        label: "Simulator"\r
      }\r
      MasterData: {\r
        label: "Master data"\r
      }\r
      ReferenceData: {\r
        label: "Reference data"\r
      }\r
      ConsignemntUI: {\r
        label: "Consignment UI"\r
\r
        ConsignmentBff: {\r
          label: "Consignment BFF"\r
        }\r
      }\r
      ConsignmentBackend: {\r
        label: "Consignment Backend"\r
      }\r
      Portal: {\r
        label: "Portal"\r
      }\r
      DmsBackend: {\r
        label: "DMS Backend"\r
      }\r
    }\r
    ComplianceApp: {\r
      label: "Compliance Application"\r
    }\r
  }\r
  CrossRoads: {\r
    label: "CrossRoads"\r
  }\r
  LogisticsProduct: {\r
    label: "Logistics, Finance & Accounting product"\r
  }\r
}\r
\r
StreamSoftware.CustomsProduct.ConsignmentApp.ConsignmentBackend -> StreamSoftware.CustomsProduct.ConsignmentApp.DmsBackend\r
StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI.ConsignmentBff -> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignmentBackend: "Get app"\r
Customer.Person -> StreamSoftware.CustomsProduct.ConsignmentApp.Portal: "View catalog of custom apps"\r
Customer.Person -> StreamSoftware.CustomsProduct.ComplianceApp: "Verify consignment and declaration compliancy"\r
Principal -> Customer: "Request declaration"\r
Customer -> Principal: "Inform declaration status"\r
Customs -> StreamSoftware.CustomsProduct.ConsignmentApp: "Notify physical control results"\r
StreamSoftware.CustomsProduct.ConsignmentApp -> Customs: "Declare goods"\r
StreamSoftware.CustomsProduct.ConsignmentApp -> StreamSoftware.CustomsProduct.ComplianceApp: "Check consignment compliancy"\r
StreamSoftware.CustomsProduct.ConsignmentApp.Portal -> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI: "Navigate to specific app"\r
Customer.Person -> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI: "Manage consignments and declarations"\r
`;case"customer":return`direction: down\r
\r
Principal: {\r
  label: "Principal"\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
}\r
Customer: {\r
  label: "Customer"\r
\r
  Person: {\r
    label: "Customer"\r
    shape: person\r
  }\r
  Email: {\r
    label: "Customer e-mail system"\r
  }\r
  ERP: {\r
    label: "Customer ERP system"\r
  }\r
}\r
\r
Principal -> Customer.Email: "Request for declaration of goods per e-mail"\r
Principal -> Customer.ERP: "Request for declaration of goods via data exchange"\r
StreamSoftware -> Customer.Person: "Notify declaration status"\r
Customer.Person -> Customer.Email: "Handle declaration requests"\r
Customer.Person -> Customer.ERP: "Handle declaration requests"\r
Customer.Person -> StreamSoftware: "[...]"\r
Customer.Email -> StreamSoftware: "Send declaration request via e-mail"\r
Customer.ERP -> StreamSoftware: "Send declaration request via data exchange"\r
`;case"customs":return`direction: down\r
\r
Customs: {\r
  label: "Customs"\r
\r
  Officer: {\r
    label: "Customs officer"\r
    shape: person\r
  }\r
  System: {\r
    label: "Customs system"\r
  }\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
\r
  CustomsProductComplianceApp: {\r
    label: "Compliance Application"\r
  }\r
}\r
\r
Customs.Officer -> Customs.System: "Manage physical control results"\r
StreamSoftware -> Customs.System: "Declare goods"\r
Customs.System -> StreamSoftware: "Notify physical control results"\r
`;case"principal":return`direction: down\r
\r
Principal: {\r
  label: "Principal"\r
\r
  Person: {\r
    label: "Principal"\r
    shape: person\r
  }\r
  ERP: {\r
    label: "Principal ERP system"\r
  }\r
}\r
Customer: {\r
  label: "Customer"\r
}\r
\r
Principal.Person -> Principal.ERP: "Manage his business"\r
Principal.Person -> Customer: "Request for declaration of goods per e-mail"\r
Principal.ERP -> Customer: "Request for declaration of goods via data exchange"\r
`;case"consignmentApp":return`direction: down\r
\r
StreamSoftwareCustomsProductConsignmentApp: {\r
  label: "Consignment Application"\r
\r
  PortalGateway: {\r
    label: "Portal Gateway"\r
  }\r
  DmsBff: {\r
    label: "DMS BFF"\r
  }\r
  Service: {\r
    label: "Simulator"\r
  }\r
  MasterData: {\r
    label: "Master data"\r
  }\r
  ReferenceData: {\r
    label: "Reference data"\r
  }\r
  Portal: {\r
    label: "Portal"\r
  }\r
  ConsignemntUI: {\r
    label: "Consignment UI"\r
  }\r
  ConsignmentBackend: {\r
    label: "Consignment Backend"\r
  }\r
  DmsBackend: {\r
    label: "DMS Backend"\r
  }\r
}\r
Customer: {\r
  label: "Customer"\r
\r
  Person: {\r
    label: "Customer"\r
    shape: person\r
  }\r
}\r
\r
StreamSoftwareCustomsProductConsignmentApp.ConsignmentBackend -> StreamSoftwareCustomsProductConsignmentApp.DmsBackend\r
StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI -> StreamSoftwareCustomsProductConsignmentApp.ConsignmentBackend: "Get app"\r
StreamSoftwareCustomsProductConsignmentApp.Portal -> StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI: "Navigate to specific app"\r
Customer.Person -> StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI: "Manage consignments and declarations"\r
Customer.Person -> StreamSoftwareCustomsProductConsignmentApp.Portal: "View catalog of custom apps"\r
`;case"customsProduct":return`direction: down\r
\r
StreamSoftware: {\r
  label: "Stream Software"\r
\r
  CustomsProduct: {\r
    label: "Customs product"\r
\r
    ConsignmentApp: {\r
      label: "Consignment Application"\r
    }\r
    ComplianceApp: {\r
      label: "Compliance Application"\r
    }\r
  }\r
}\r
Customs: {\r
  label: "Customs"\r
\r
  Officer: {\r
    label: "Customs officer"\r
    shape: person\r
  }\r
  System: {\r
    label: "Customs system"\r
  }\r
}\r
Customer: {\r
  label: "Customer"\r
\r
  Person: {\r
    label: "Customer"\r
    shape: person\r
  }\r
}\r
\r
StreamSoftware.CustomsProduct.ConsignmentApp -> StreamSoftware.CustomsProduct.ComplianceApp: "Check consignment compliancy"\r
StreamSoftware.CustomsProduct.ConsignmentApp -> Customs.System: "Declare goods"\r
Customs.System -> StreamSoftware.CustomsProduct.ConsignmentApp: "Notify physical control results"\r
Customs.Officer -> Customs.System: "Manage physical control results"\r
StreamSoftware.CustomsProduct.ConsignmentApp -> Customer.Person: "Notify declaration status"\r
Customer.Person -> StreamSoftware.CustomsProduct.ConsignmentApp: "Manage consignments and declare goods"\r
Customer.Person -> StreamSoftware.CustomsProduct.ComplianceApp: "Verify consignment and declaration compliancy"\r
`;case"streamSoftware":return`direction: down\r
\r
Customs: {\r
  label: "Customs"\r
}\r
StreamSoftware: {\r
  label: "Stream Software"\r
\r
  SupportStaff: {\r
    label: "Customer support staff"\r
    shape: person\r
  }\r
  SupportSystem: {\r
    label: "Customer support system"\r
  }\r
  CustomsProduct: {\r
    label: "Customs product"\r
  }\r
  CrossRoads: {\r
    label: "CrossRoads"\r
  }\r
  LogisticsProduct: {\r
    label: "Logistics, Finance & Accounting product"\r
  }\r
}\r
Customer: {\r
  label: "Customer"\r
\r
  Person: {\r
    label: "Customer"\r
    shape: person\r
  }\r
}\r
\r
Customs -> StreamSoftware.CustomsProduct: "Notify physical control results"\r
StreamSoftware.SupportStaff -> StreamSoftware.SupportSystem: "Uses this to follow up on support cases"\r
StreamSoftware.SupportStaff -> StreamSoftware.CustomsProduct: "Assist in customer cases"\r
StreamSoftware.CustomsProduct -> Customs: "Declare goods"\r
StreamSoftware.CustomsProduct -> Customer.Person: "Notify declaration status"\r
Customer.Person -> StreamSoftware.SupportStaff: "Request support"\r
Customer.Person -> StreamSoftware.CustomsProduct: "[...]"\r
`;default:throw new Error("Unknown viewId: "+t)}}function n(t){switch(t){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    principal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Principal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the principal.</FONT></TD></TR></TABLE>>,
        likec4_id=principal,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customer.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    principal -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request declaration</FONT></TD></TR></TABLE>>,
        likec4_id="16okyt8",
        style=dashed];
    customer -> principal [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Inform declaration status</FONT></TD></TR></TABLE>>,
        likec4_id="17qphks",
        style=dashed];
    streamsoftware [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Stream Software</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of Stream<BR/>Software.</FONT></TD></TR></TABLE>>,
        likec4_id=streamSoftware,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=a5an99,
        style=dashed];
    streamsoftware -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify declaration status</FONT></TD></TR></TABLE>>,
        likec4_id="1c1ru1p",
        style=dashed];
    customs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customs.</FONT></TD></TR></TABLE>>,
        likec4_id=customs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    streamsoftware -> customs [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>,
        likec4_id="7wvra1",
        style=dashed];
    customs -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Verify compliancy actions</FONT></TD></TR></TABLE>>,
        likec4_id=v9iyop,
        style=dashed];
}
`;case"systemLandscape":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    principal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Principal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the principal.</FONT></TD></TR></TABLE>>,
        likec4_id=principal,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customer.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    principal -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request declaration</FONT></TD></TR></TABLE>>,
        likec4_id="16okyt8",
        style=dashed];
    customer -> principal [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Inform declaration status</FONT></TD></TR></TABLE>>,
        likec4_id="17qphks",
        style=dashed];
    streamsoftware [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Stream Software</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of Stream<BR/>Software.</FONT></TD></TR></TABLE>>,
        likec4_id=streamSoftware,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage declarations</FONT></TD></TR></TABLE>>,
        likec4_id=a5an99,
        style=dashed];
    streamsoftware -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify declaration status</FONT></TD></TR></TABLE>>,
        likec4_id="1c1ru1p",
        style=dashed];
    customs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customs.</FONT></TD></TR></TABLE>>,
        likec4_id=customs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    streamsoftware -> customs [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>,
        likec4_id="7wvra1",
        style=dashed];
    customs -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Verify compliancy actions</FONT></TD></TR></TABLE>>,
        likec4_id=v9iyop,
        style=dashed];
}
`;case"detailedSystemLandscape":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_customer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER</B></FONT>>,
            likec4_depth=1,
            likec4_id=customer,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        person [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person that manages consignments and<BR/>declares goods to customs</FONT></TD></TR></TABLE>>,
            likec4_id="customer.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_streamsoftware {
        graph [color="#1c315e",
            fillcolor="#1c3b6d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STREAM SOFTWARE</B></FONT>>,
            likec4_depth=4,
            likec4_id=streamSoftware,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_customsproduct {
            graph [color="#1c356c",
                fillcolor="#1c417d",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMS PRODUCT</B></FONT>>,
                likec4_depth=3,
                likec4_id="streamSoftware.customsProduct",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            subgraph cluster_consignmentapp {
                graph [color="#1c3979",
                    fillcolor="#1a468d",
                    label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONSIGNMENT APPLICATION</B></FONT>>,
                    likec4_depth=2,
                    likec4_id="streamSoftware.customsProduct.consignmentApp",
                    likec4_level=2,
                    margin=40,
                    style=filled
                ];
                subgraph cluster_consignemntui {
                    graph [color="#1b3d88",
                        fillcolor="#194b9e",
                        label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONSIGNMENT UI</B></FONT>>,
                        likec4_depth=1,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.consignemntUI",
                        likec4_level=3,
                        margin=32,
                        style=filled
                    ];
                    consignmentbff [group="streamSoftware.customsProduct.consignmentApp",
                        height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Consignment BFF</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">???</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.consignemntUI.consignmentBff",
                        likec4_level=4,
                        margin="0.112,0.223",
                        width=4.445];
                }
                {
                    graph [rank=same];
                    portalgateway [height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Portal Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gateway to ...todo</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.portalGateway",
                        likec4_level=3,
                        margin="0.223,0.223",
                        width=4.445];
                    dmsbff [height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">DMS BFF</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.dmsBff",
                        likec4_level=3,
                        margin="0.112,0.223",
                        width=4.445];
                    service [height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Simulator</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.service",
                        likec4_level=3,
                        margin="0.112,0.223",
                        width=4.445];
                }
                {
                    graph [rank=same];
                    masterdata [height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Master data</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Azure Blob storage</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.masterData",
                        likec4_level=3,
                        margin="0.112,0.223",
                        width=4.445];
                    referencedata [height=2.5,
                        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Reference data</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Azure Blob storage</FONT></TD></TR></TABLE>>,
                        likec4_id="streamSoftware.customsProduct.consignmentApp.referenceData",
                        likec4_level=3,
                        margin="0.112,0.223",
                        width=4.445];
                }
                portalgateway -> masterdata [minlen=1,
                    style=invis];
                consignmentbackend [group="streamSoftware.customsProduct.consignmentApp",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Consignment Backend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">???</FONT></TD></TR></TABLE>>,
                    likec4_id="streamSoftware.customsProduct.consignmentApp.consignmentBackend",
                    likec4_level=3,
                    margin="0.112,0.223",
                    width=4.445];
                portal [height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Portal</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Typescript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Main app to manage consignments</FONT></TD></TR></TABLE>>,
                    likec4_id="streamSoftware.customsProduct.consignmentApp.portal",
                    likec4_level=3,
                    margin="0.112,0.306",
                    width=4.445];
                dmsbackend [group="streamSoftware.customsProduct.consignmentApp",
                    height=2.5,
                    label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">DMS Backend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
                    likec4_id="streamSoftware.customsProduct.consignmentApp.dmsBackend",
                    likec4_level=3,
                    margin="0.112,0.223",
                    width=4.445];
            }
            complianceapp [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Compliance Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Collection of compliance applications and<BR/>business modules</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.complianceApp",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        crossroads [height=2.5,
            label=<<FONT POINT-SIZE="19">CrossRoads</FONT>>,
            likec4_id="streamSoftware.crossRoads",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        logisticsproduct [height=2.5,
            label=<<FONT POINT-SIZE="19">Logistics, Finance &amp; Accounting<BR/>product</FONT>>,
            likec4_id="streamSoftware.logisticsProduct",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    principal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Principal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the principal.</FONT></TD></TR></TABLE>>,
        likec4_id=principal,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    principal -> person [lhead=cluster_customer,
        likec4_id="16okyt8",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request declaration</FONT></TD></TR></TABLE>>];
    customs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customs.</FONT></TD></TR></TABLE>>,
        likec4_id=customs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customs -> portalgateway [lhead=cluster_consignmentapp,
        likec4_id="10jvjqo",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify physical control results</FONT></TD></TR></TABLE>>];
    dmsbff -> service [style=invis];
    service -> referencedata [style=invis];
    referencedata -> crossroads [style=invis];
    person -> principal [likec4_id="17qphks",
        ltail=cluster_customer,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Inform declaration status</FONT></TD></TR></TABLE>>];
    person -> consignmentbff [lhead=cluster_consignemntui,
        likec4_id="6fzxzy",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage consignments and declarations</FONT></TD></TR></TABLE>>];
    person -> portal [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">View catalog of custom apps</FONT></TD></TR></TABLE>>,
        likec4_id=uy6i1h,
        style=dashed];
    person -> complianceapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Verify consignment and declaration<BR/>compliancy</FONT></TD></TR></TABLE>>,
        likec4_id="1vfgl2p",
        style=dashed,
        weight=2];
    consignmentbff -> consignmentbackend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Get app</FONT></TD></TR></TABLE>>,
        likec4_id=xu8l25,
        style=dashed];
    consignmentbackend -> dmsbackend [likec4_id="1ic9kb7",
        style=dashed,
        weight=2];
    portal -> consignmentbff [lhead=cluster_consignemntui,
        likec4_id="18f7e3l",
        style=dashed,
        weight=5,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Navigate to specific app</FONT></TD></TR></TABLE>>];
    dmsbackend -> customs [likec4_id="16uy25s",
        ltail=cluster_consignmentapp,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>];
    dmsbackend -> complianceapp [likec4_id="1wlw9o4",
        ltail=cluster_consignmentapp,
        style=dashed,
        weight=4,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Check consignment compliancy</FONT></TD></TR></TABLE>>];
}
`;case"customer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_customer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER</B></FONT>>,
            likec4_depth=1,
            likec4_id=customer,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        person [group=customer,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person that manages consignments and<BR/>declares goods to customs</FONT></TD></TR></TABLE>>,
            likec4_id="customer.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        email [group=customer,
            height=2.5,
            label=<<FONT POINT-SIZE="19">Customer e-mail system</FONT>>,
            likec4_id="customer.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        erp [group=customer,
            height=2.5,
            label=<<FONT POINT-SIZE="19">Customer ERP system</FONT>>,
            likec4_id="customer.ERP",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    principal [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Principal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the principal.</FONT></TD></TR></TABLE>>,
        likec4_id=principal,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    principal -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request for declaration of goods per<BR/>e-mail</FONT></TD></TR></TABLE>>,
        likec4_id="1xdqvlq",
        style=dashed];
    principal -> erp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request for declaration of goods via<BR/>data exchange</FONT></TD></TR></TABLE>>,
        likec4_id=ba5b4l,
        style=dashed];
    streamsoftware [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Stream Software</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of Stream<BR/>Software.</FONT></TD></TR></TABLE>>,
        likec4_id=streamSoftware,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    streamsoftware -> person [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify declaration status</FONT></TD></TR></TABLE>>,
        likec4_id="1fe3uxy",
        style=dashed];
    person -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1e8hvye",
        style=dashed];
    person -> email [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Handle declaration requests</FONT></TD></TR></TABLE>>,
        likec4_id=k1otmb,
        style=dashed,
        weight=2];
    person -> erp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Handle declaration requests</FONT></TD></TR></TABLE>>,
        likec4_id=ml3f88,
        style=dashed,
        weight=2];
    email -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Send declaration request via e-mail</FONT></TD></TR></TABLE>>,
        likec4_id="1m2f6bj",
        style=dashed];
    erp -> streamsoftware [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Send declaration request via data<BR/>exchange</FONT></TD></TR></TABLE>>,
        likec4_id=o1q1dg,
        style=dashed];
}
`;case"customs":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_customs {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMS</B></FONT>>,
            likec4_depth=1,
            likec4_id=customs,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        officer [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs officer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The national customs authority</FONT></TD></TR></TABLE>>,
            likec4_id="customs.officer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        system [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs system</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The system that is used by the national<BR/>customs</FONT></TD></TR></TABLE>>,
            likec4_id="customs.system",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_streamsoftware {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STREAM SOFTWARE</B></FONT>>,
            likec4_depth=1,
            likec4_id=streamSoftware,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        complianceapp [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Compliance Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Collection of compliance applications and<BR/>business modules</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct.complianceApp",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    officer -> system [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage physical control results</FONT></TD></TR></TABLE>>,
        likec4_id=bx05lp,
        minlen=0,
        style=dashed,
        weight=2];
    system -> complianceapp [lhead=cluster_streamsoftware,
        likec4_id="131wek2",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify physical control results</FONT></TD></TR></TABLE>>];
    complianceapp -> system [likec4_id="101r0xe",
        ltail=cluster_streamsoftware,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>];
}
`;case"principal":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_principal {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PRINCIPAL</B></FONT>>,
            likec4_depth=1,
            likec4_id=principal,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        person [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Principal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person who initiates a declaration<BR/>request.</FONT></TD></TR></TABLE>>,
            likec4_id="principal.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        erp [height=2.5,
            label=<<FONT POINT-SIZE="19">Principal ERP system</FONT>>,
            likec4_id="principal.ERP",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    person -> erp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage his business</FONT></TD></TR></TABLE>>,
        likec4_id="17zfc1k",
        minlen=0,
        style=dashed,
        weight=2];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customer.</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    person -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request for declaration of goods per<BR/>e-mail</FONT></TD></TR></TABLE>>,
        likec4_id=jk9s3r,
        style=dashed];
    erp -> customer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request for declaration of goods via<BR/>data exchange</FONT></TD></TR></TABLE>>,
        likec4_id=d3231x,
        style=dashed];
}
`;case"consignmentApp":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_consignmentapp {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CONSIGNMENT APPLICATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="streamSoftware.customsProduct.consignmentApp",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            portalgateway [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Portal Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gateway to ...todo</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp.portalGateway",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            dmsbff [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">DMS BFF</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp.dmsBff",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
            service [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Simulator</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp.service",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            masterdata [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Master data</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Azure Blob storage</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp.masterData",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
            referencedata [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Reference data</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Azure Blob storage</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp.referenceData",
                likec4_level=1,
                margin="0.112,0.223",
                width=4.445];
        }
        portalgateway -> masterdata [style=invis];
        portal [group="streamSoftware.customsProduct.consignmentApp",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Portal</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">React, Typescript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Main app to manage consignments</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct.consignmentApp.portal",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        consignemntui [group="streamSoftware.customsProduct.consignmentApp",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Consignment UI</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">React</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct.consignmentApp.consignemntUI",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        consignmentbackend [group="streamSoftware.customsProduct.consignmentApp",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Consignment Backend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">???</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct.consignmentApp.consignmentBackend",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        dmsbackend [group="streamSoftware.customsProduct.consignmentApp",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">DMS Backend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Core</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">??</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct.consignmentApp.dmsBackend",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    subgraph cluster_customer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER</B></FONT>>,
            likec4_depth=1,
            likec4_id=customer,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        person [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person that manages consignments and<BR/>declares goods to customs</FONT></TD></TR></TABLE>>,
            likec4_id="customer.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    dmsbff -> service [style=invis];
    service -> referencedata [style=invis];
    person -> portal [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">View catalog of custom apps</FONT></TD></TR></TABLE>>,
        likec4_id=uy6i1h,
        style=dashed];
    person -> consignemntui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage consignments and declarations</FONT></TD></TR></TABLE>>,
        likec4_id="6fzxzy",
        style=dashed];
    portal -> consignemntui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Navigate to specific app</FONT></TD></TR></TABLE>>,
        likec4_id="18f7e3l",
        style=dashed,
        weight=5];
    consignemntui -> consignmentbackend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Get app</FONT></TD></TR></TABLE>>,
        likec4_id="2tbi4y",
        style=dashed,
        weight=5];
    consignmentbackend -> dmsbackend [likec4_id="1ic9kb7",
        minlen=1,
        style=dashed];
}
`;case"customsProduct":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_streamsoftware {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STREAM SOFTWARE</B></FONT>>,
            likec4_depth=2,
            likec4_id=streamSoftware,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_customsproduct {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMS PRODUCT</B></FONT>>,
                likec4_depth=1,
                likec4_id="streamSoftware.customsProduct",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            consignmentapp [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Consignment Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Collection of customs applications and<BR/>business modules</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.consignmentApp",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            complianceapp [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Compliance Application</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Collection of compliance applications and<BR/>business modules</FONT></TD></TR></TABLE>>,
                likec4_id="streamSoftware.customsProduct.complianceApp",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph cluster_customs {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMS</B></FONT>>,
            likec4_depth=1,
            likec4_id=customs,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        officer [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs officer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The national customs authority</FONT></TD></TR></TABLE>>,
            likec4_id="customs.officer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        system [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs system</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The system that is used by the national<BR/>customs</FONT></TD></TR></TABLE>>,
            likec4_id="customs.system",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_customer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER</B></FONT>>,
            likec4_depth=1,
            likec4_id=customer,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        person [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person that manages consignments and<BR/>declares goods to customs</FONT></TD></TR></TABLE>>,
            likec4_id="customer.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    consignmentapp -> person [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify declaration status</FONT></TD></TR></TABLE>>,
        likec4_id=x76027,
        style=dashed];
    consignmentapp -> system [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>,
        likec4_id="8n6ta3",
        style=dashed];
    consignmentapp -> complianceapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Check consignment compliancy</FONT></TD></TR></TABLE>>,
        likec4_id="1wlw9o4",
        minlen=0,
        style=dashed,
        weight=4];
    officer -> system [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage physical control results</FONT></TD></TR></TABLE>>,
        likec4_id=bx05lp,
        minlen=0,
        style=dashed,
        weight=4];
    person -> consignmentapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manage consignments and declare goods</FONT></TD></TR></TABLE>>,
        likec4_id="1rtw2wf",
        style=dashed];
    person -> complianceapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Verify consignment and declaration<BR/>compliancy</FONT></TD></TR></TABLE>>,
        likec4_id="1vfgl2p",
        style=dashed];
    system -> consignmentapp [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify physical control results</FONT></TD></TR></TABLE>>,
        likec4_id=d0epcr,
        style=dashed];
}
`;case"streamSoftware":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_streamsoftware {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STREAM SOFTWARE</B></FONT>>,
            likec4_depth=1,
            likec4_id=streamSoftware,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        supportstaff [group=streamSoftware,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer support staff</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer support staff within Stream<BR/>Softwarer</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.supportStaff",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        supportsystem [group=streamSoftware,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer support system</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The system to manage customer support<BR/>requests, tickets, etc.</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.supportSystem",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        customsproduct [group=streamSoftware,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs product</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The streamliner cloud product for customs<BR/>delcarations.</FONT></TD></TR></TABLE>>,
            likec4_id="streamSoftware.customsProduct",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        crossroads [height=2.5,
            label=<<FONT POINT-SIZE="19">CrossRoads</FONT>>,
            likec4_id="streamSoftware.crossRoads",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        logisticsproduct [height=2.5,
            label=<<FONT POINT-SIZE="19">Logistics, Finance &amp; Accounting<BR/>product</FONT>>,
            likec4_id="streamSoftware.logisticsProduct",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_customer {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER</B></FONT>>,
            likec4_depth=1,
            likec4_id=customer,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        person [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The person that manages consignments and<BR/>declares goods to customs</FONT></TD></TR></TABLE>>,
            likec4_id="customer.person",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The enterprise environment of the customs.</FONT></TD></TR></TABLE>>,
        likec4_id=customs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customs -> customsproduct [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify physical control results</FONT></TD></TR></TABLE>>,
        likec4_id="16fhluk",
        style=dashed];
    supportstaff -> supportsystem [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses this to follow up on support cases</FONT></TD></TR></TABLE>>,
        likec4_id="1rqfmbt",
        minlen=1,
        style=dashed,
        weight=3];
    supportstaff -> customsproduct [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Assist in customer cases</FONT></TD></TR></TABLE>>,
        likec4_id="1r4m414",
        style=dashed,
        weight=3];
    customsproduct -> customs [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Declare goods</FONT></TD></TR></TABLE>>,
        likec4_id=c91n8c,
        style=dashed];
    customsproduct -> person [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify declaration status</FONT></TD></TR></TABLE>>,
        likec4_id=zcqmn7,
        style=dashed];
    crossroads -> logisticsproduct [style=invis];
    person -> supportstaff [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Request support</FONT></TD></TR></TABLE>>,
        likec4_id=baexc1,
        style=dashed];
    person -> customsproduct [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1axpkwz",
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+t)}}function o(t){switch(t){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="366pt" height="1178pt"
 viewBox="0.00 0.00 366.32 1178.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1163.45)">
<!-- principal -->
<g id="node1" class="node">
<title>principal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="332.34,-1148.4 2.91,-1148.4 2.91,-968.4 332.34,-968.4 332.34,-1148.4"/>
<text text-anchor="start" x="131.2" y="-1063.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal</text>
<text text-anchor="start" x="22.97" y="-1040.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the principal.</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="335.26,-825.6 0,-825.6 0,-645.6 335.26,-645.6 335.26,-825.6"/>
<text text-anchor="start" x="126.45" y="-740.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="20.06" y="-717.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customer.</text>
</g>
<!-- streamsoftware -->
<g id="node3" class="node">
<title>streamsoftware</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="327.65,-502.8 7.61,-502.8 7.61,-322.8 327.65,-322.8 327.65,-502.8"/>
<text text-anchor="start" x="96.88" y="-427.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Stream Software</text>
<text text-anchor="start" x="41.32" y="-403.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of Stream</text>
<text text-anchor="start" x="135.95" y="-385.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Software.</text>
</g>
<!-- customs -->
<g id="node4" class="node">
<title>customs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="332.34,-180 2.92,-180 2.92,0 332.34,0 332.34,-180"/>
<text text-anchor="start" x="130.15" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs</text>
<text text-anchor="start" x="22.97" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customs.</text>
</g>
<!-- principal&#45;&gt;customer -->
<g id="edge1" class="edge">
<title>principal&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M61.02,-968.59C45.55,-950.4 31.9,-930.11 23.1,-908.4 12.35,-881.86 19.67,-856.4 35.58,-833.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="37.58,-835.3 39.99,-827.73 33.39,-832.14 37.58,-835.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="23.1,-885.6 23.1,-908.4 153.63,-908.4 153.63,-885.6 23.1,-885.6"/>
<text text-anchor="start" x="26.1" y="-892.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request declaration</text>
</g>
<!-- customer&#45;&gt;principal -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;principal</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M173.88,-825.59C175.03,-845.34 176.04,-866.17 176.63,-885.6 177.34,-909.13 176.76,-934.47 175.61,-958.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="173,-958.06 175.23,-965.68 178.24,-958.33 173,-958.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="176.93,-885.6 176.93,-908.4 336.23,-908.4 336.23,-885.6 176.93,-885.6"/>
<text text-anchor="start" x="179.93" y="-892.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Inform declaration status</text>
</g>
<!-- customer&#45;&gt;streamsoftware -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M104.99,-645.86C94.53,-626.8 85.26,-606.18 79.63,-585.6 72.85,-560.77 78.06,-535.38 88.67,-511.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="90.9,-513.4 91.84,-505.51 86.19,-511.1 90.9,-513.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="79.63,-562.8 79.63,-585.6 106.63,-585.6 106.63,-562.8 79.63,-562.8"/>
<text text-anchor="start" x="82.63" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- streamsoftware&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>streamsoftware&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M167.63,-502.63C167.63,-543.81 167.63,-592.92 167.63,-635.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="165,-635.14 167.63,-642.64 170.25,-635.14 165,-635.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="167.63,-562.8 167.63,-585.6 323.03,-585.6 323.03,-562.8 167.63,-562.8"/>
<text text-anchor="start" x="170.63" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify declaration status</text>
</g>
<!-- streamsoftware&#45;&gt;customs -->
<g id="edge5" class="edge">
<title>streamsoftware&#45;&gt;customs</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M74.84,-323.04C60.72,-304.58 48.24,-284.18 40.35,-262.8 30.78,-236.86 37.56,-211.47 51.97,-188.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="54.12,-190.02 56.15,-182.34 49.77,-187.07 54.12,-190.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="40.35,-240 40.35,-262.8 136.63,-262.8 136.63,-240 40.35,-240"/>
<text text-anchor="start" x="43.35" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
<!-- customs&#45;&gt;streamsoftware -->
<g id="edge6" class="edge">
<title>customs&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M167.63,-179.83C167.63,-221.01 167.63,-270.12 167.63,-312.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="165,-312.34 167.63,-319.84 170.25,-312.34 165,-312.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="167.63,-240 167.63,-262.8 331.58,-262.8 331.58,-240 167.63,-240"/>
<text text-anchor="start" x="170.63" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Verify compliancy actions</text>
</g>
</g>
</svg>
`;case"systemLandscape":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="2183pt" height="210pt"
 viewBox="0.00 0.00 2182.90 210.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- principal -->
<g id="node1" class="node">
<title>principal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="329.43,-180 0,-180 0,0 329.43,0 329.43,-180"/>
<text text-anchor="start" x="128.28" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal</text>
<text text-anchor="start" x="20.06" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the principal.</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="943.99,-180 608.73,-180 608.73,0 943.99,0 943.99,-180"/>
<text text-anchor="start" x="735.18" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="628.79" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customer.</text>
</g>
<!-- streamsoftware -->
<g id="node3" class="node">
<title>streamsoftware</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1539.43,-180 1219.39,-180 1219.39,0 1539.43,0 1539.43,-180"/>
<text text-anchor="start" x="1308.66" y="-104.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Stream Software</text>
<text text-anchor="start" x="1253.1" y="-81.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of Stream</text>
<text text-anchor="start" x="1347.73" y="-63.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Software.</text>
</g>
<!-- customs -->
<g id="node4" class="node">
<title>customs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2152.8,-180 1823.38,-180 1823.38,0 2152.8,0 2152.8,-180"/>
<text text-anchor="start" x="1950.61" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs</text>
<text text-anchor="start" x="1843.44" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customs.</text>
</g>
<!-- principal&#45;&gt;customer -->
<g id="edge1" class="edge">
<title>principal&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M329.09,-90C412.29,-90 513.57,-90 598.59,-90"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="598.35,-92.63 605.85,-90 598.35,-87.38 598.35,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="403.82,-90 403.82,-112.8 534.34,-112.8 534.34,-90 403.82,-90"/>
<text text-anchor="start" x="406.82" y="-97.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request declaration</text>
</g>
<!-- customer&#45;&gt;principal -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;principal</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M608.95,-49.15C588.77,-45.47 568.35,-42.33 548.73,-40.2 478.34,-32.56 459.81,-32.46 389.43,-40.2 373.07,-42 356.15,-44.52 339.28,-47.48"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="339.25,-44.81 332.34,-48.73 340.18,-49.98 339.25,-44.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="389.43,-40.2 389.43,-63 548.73,-63 548.73,-40.2 389.43,-40.2"/>
<text text-anchor="start" x="392.43" y="-47.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Inform declaration status</text>
</g>
<!-- customer&#45;&gt;streamsoftware -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M943.59,-90C1026.3,-90 1126.11,-90 1209.23,-90"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1209.01,-92.63 1216.51,-90 1209.01,-87.38 1209.01,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1013.7,-90 1013.7,-112.8 1149.67,-112.8 1149.67,-90 1013.7,-90"/>
<text text-anchor="start" x="1016.7" y="-97.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage declarations</text>
</g>
<!-- streamsoftware&#45;&gt;customer -->
<g id="edge4" class="edge">
<title>streamsoftware&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1219.43,-49.5C1199.33,-45.66 1178.96,-42.4 1159.39,-40.2 1090.75,-32.49 1072.65,-32.74 1003.99,-40.2 987.58,-41.98 970.62,-44.47 953.71,-47.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="953.67,-44.73 946.74,-48.62 954.59,-49.9 953.67,-44.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1003.99,-40.2 1003.99,-63 1159.39,-63 1159.39,-40.2 1003.99,-40.2"/>
<text text-anchor="start" x="1006.99" y="-47.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify declaration status</text>
</g>
<!-- streamsoftware&#45;&gt;customs -->
<g id="edge5" class="edge">
<title>streamsoftware&#45;&gt;customs</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1539.41,-90C1623.5,-90 1726.89,-90 1813.11,-90"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1813.01,-92.63 1820.51,-90 1813.01,-87.38 1813.01,-92.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1633.27,-90 1633.27,-112.8 1729.54,-112.8 1729.54,-90 1633.27,-90"/>
<text text-anchor="start" x="1636.27" y="-97.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
<!-- customs&#45;&gt;streamsoftware -->
<g id="edge6" class="edge">
<title>customs&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1823.46,-49.27C1803.33,-45.53 1782.96,-42.35 1763.38,-40.2 1690.95,-32.24 1671.84,-32.07 1599.43,-40.2 1583.07,-42.04 1566.15,-44.62 1549.3,-47.66"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1549.27,-44.99 1542.37,-48.94 1550.22,-50.16 1549.27,-44.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1599.43,-40.2 1599.43,-63 1763.38,-63 1763.38,-40.2 1599.43,-40.2"/>
<text text-anchor="start" x="1602.43" y="-47.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Verify compliancy actions</text>
</g>
</g>
</svg>
`;case"detailedSystemLandscape":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="2826pt" height="2895pt"
 viewBox="0.00 0.00 2825.81 2895.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2880.25)">
<g id="clust1" class="cluster">
<title>cluster_customer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="71,-2584 71,-2849.2 471,-2849.2 471,-2584 71,-2584"/>
<text text-anchor="start" x="79" y="-2836.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_streamsoftware</title>
<polygon fill="#1c3b6d" stroke="#1c315e" points="536,-8 536,-2857.2 2426,-2857.2 2426,-8 536,-8"/>
<text text-anchor="start" x="544" y="-2844.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STREAM SOFTWARE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_customsproduct</title>
<polygon fill="#1c417d" stroke="#1c356c" points="576,-297 576,-2525.2 2386,-2525.2 2386,-297 576,-297"/>
<text text-anchor="start" x="584" y="-2512.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMS PRODUCT</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_consignmentapp</title>
<polygon fill="#1a468d" stroke="#1c3979" points="976,-337 976,-2464 2346,-2464 2346,-337 976,-337"/>
<text text-anchor="start" x="984" y="-2451.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONSIGNMENT APPLICATION</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_consignemntui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1016,-1888.6 1016,-2153.8 1400,-2153.8 1400,-1888.6 1016,-1888.6"/>
<text text-anchor="start" x="1024" y="-2140.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONSIGNMENT UI</text>
</g>
<!-- person -->
<g id="node1" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="439.48,-2796 102.52,-2796 102.52,-2616 439.48,-2616 439.48,-2796"/>
<text text-anchor="start" x="229.82" y="-2720.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="122.57" y="-2697.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person that manages consignments and</text>
<text text-anchor="start" x="181.79" y="-2679.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">declares goods to customs</text>
</g>
<!-- consignmentbff -->
<g id="node2" class="node">
<title>consignmentbff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1368.02,-2100.6 1047.98,-2100.6 1047.98,-1920.6 1368.02,-1920.6 1368.02,-2100.6"/>
<text text-anchor="start" x="1117.5" y="-2006.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1161.44" y="-2025.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment BFF</text>
<text text-anchor="start" x="1324.61" y="-2006.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1161.44" y="-2004.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1161.44" y="-1982.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">???</text>
</g>
<!-- portalgateway -->
<g id="node3" class="node">
<title>portalgateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1336.02,-858 1015.98,-858 1015.98,-678 1336.02,-678 1336.02,-858"/>
<text text-anchor="start" x="1111.05" y="-783.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Portal Gateway</text>
<text text-anchor="start" x="1145.3" y="-761.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1115.13" y="-740.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gateway to ...todo</text>
</g>
<!-- dmsbff -->
<g id="node4" class="node">
<title>dmsbff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1766.02,-858 1445.98,-858 1445.98,-678 1766.02,-678 1766.02,-858"/>
<text text-anchor="start" x="1550.36" y="-763.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1594.31" y="-783.1" font-family="Arial" font-size="19.00" fill="#eff6ff">DMS BFF</text>
<text text-anchor="start" x="1687.75" y="-763.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1594.31" y="-761.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1594.31" y="-740.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- service -->
<g id="node5" class="node">
<title>service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2306.02,-858 1985.98,-858 1985.98,-678 2306.02,-678 2306.02,-858"/>
<text text-anchor="start" x="2091.93" y="-763.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="2135.88" y="-783.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Simulator</text>
<text text-anchor="start" x="2226.18" y="-763.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="2135.88" y="-761.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="2135.88" y="-740.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- masterdata -->
<g id="node6" class="node">
<title>masterdata</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1336.02,-557 1015.98,-557 1015.98,-377 1336.02,-377 1336.02,-557"/>
<text text-anchor="start" x="1106.77" y="-462.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1150.72" y="-471.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Master data</text>
<text text-anchor="start" x="1271.34" y="-462.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1150.72" y="-449.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Azure Blob storage</text>
</g>
<!-- referencedata -->
<g id="node7" class="node">
<title>referencedata</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2306.02,-557 1985.98,-557 1985.98,-377 2306.02,-377 2306.02,-557"/>
<text text-anchor="start" x="2067.1" y="-462.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="2111.04" y="-471.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Reference data</text>
<text text-anchor="start" x="2251.02" y="-462.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="2111.04" y="-449.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Azure Blob storage</text>
</g>
<!-- consignmentbackend -->
<g id="node8" class="node">
<title>consignmentbackend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1368.02,-1761 1047.98,-1761 1047.98,-1581 1368.02,-1581 1368.02,-1761"/>
<text text-anchor="start" x="1098.47" y="-1666.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1142.42" y="-1686.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment Backend</text>
<text text-anchor="start" x="1343.64" y="-1666.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1142.42" y="-1664.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1142.42" y="-1643.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">???</text>
</g>
<!-- portal -->
<g id="node9" class="node">
<title>portal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1386.8,-2402.8 1029.2,-2402.8 1029.2,-2222.8 1386.8,-2222.8 1386.8,-2402.8"/>
<text text-anchor="start" x="1077.32" y="-2308.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1121.26" y="-2327.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Portal</text>
<text text-anchor="start" x="1364.79" y="-2308.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1121.26" y="-2306.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Typescript</text>
<text text-anchor="start" x="1121.26" y="-2285.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main app to manage consignments</text>
</g>
<!-- dmsbackend -->
<g id="node10" class="node">
<title>dmsbackend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1368.02,-1460 1047.98,-1460 1047.98,-1280 1368.02,-1280 1368.02,-1460"/>
<text text-anchor="start" x="1133.33" y="-1365.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1177.28" y="-1385.1" font-family="Arial" font-size="19.00" fill="#eff6ff">DMS Backend</text>
<text text-anchor="start" x="1308.78" y="-1365.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1177.28" y="-1363.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1177.28" y="-1342.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- complianceapp -->
<g id="node11" class="node">
<title>complianceapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="936.02,-1159 615.98,-1159 615.98,-979 936.02,-979 936.02,-1159"/>
<text text-anchor="start" x="676.72" y="-1083.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Compliance Application</text>
<text text-anchor="start" x="638.42" y="-1060.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Collection of compliance applications and</text>
<text text-anchor="start" x="715.97" y="-1042.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">business modules</text>
</g>
<!-- crossroads -->
<g id="node12" class="node">
<title>crossroads</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2306.02,-228 1985.98,-228 1985.98,-48 2306.02,-48 2306.02,-228"/>
<text text-anchor="start" x="2093.73" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">CrossRoads</text>
</g>
<!-- logisticsproduct -->
<g id="node13" class="node">
<title>logisticsproduct</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1599.02,-2796 1278.98,-2796 1278.98,-2616 1599.02,-2616 1599.02,-2796"/>
<text text-anchor="start" x="1304.34" y="-2711.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Logistics, Finance &amp; Accounting</text>
<text text-anchor="start" x="1407.31" y="-2688.9" font-family="Arial" font-size="19.00" fill="#eff6ff">product</text>
</g>
<!-- principal -->
<g id="node14" class="node">
<title>principal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="495.72,-2402.8 166.28,-2402.8 166.28,-2222.8 495.72,-2222.8 495.72,-2402.8"/>
<text text-anchor="start" x="294.57" y="-2318.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal</text>
<text text-anchor="start" x="186.34" y="-2294.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the principal.</text>
</g>
<!-- customs -->
<g id="node15" class="node">
<title>customs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2795.71,-1159 2466.29,-1159 2466.29,-979 2795.71,-979 2795.71,-1159"/>
<text text-anchor="start" x="2593.52" y="-1074.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs</text>
<text text-anchor="start" x="2486.35" y="-1051.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customs.</text>
</g>
<!-- person&#45;&gt;consignmentbff -->
<g id="edge8" class="edge">
<title>person&#45;&gt;consignmentbff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M419.52,-2616.22C462.94,-2588.52 509.78,-2556.89 551,-2525.2 740.9,-2379.21 755.84,-2303.45 949,-2161.8 967.47,-2148.25 987.26,-2134.92 1007.37,-2122.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1008.5,-2124.51 1013.44,-2118.29 1005.7,-2120.07 1008.5,-2124.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="721.67,-2370.64 721.67,-2393.44 975.15,-2393.44 975.15,-2370.64 721.67,-2370.64"/>
<text text-anchor="start" x="724.67" y="-2377.84" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage consignments and declarations</text>
</g>
<!-- person&#45;&gt;portal -->
<g id="edge9" class="edge">
<title>person&#45;&gt;portal</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M424.96,-2616.02C452.24,-2603.39 480.91,-2592 509,-2584 650.56,-2543.68 699.88,-2604.08 839,-2556 932.78,-2523.59 1026.1,-2462 1095.43,-2409.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1097.02,-2411.13 1101.36,-2404.48 1093.82,-2406.97 1097.02,-2411.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="894.39,-2533.2 894.39,-2556 1078.59,-2556 1078.59,-2533.2 894.39,-2533.2"/>
<text text-anchor="start" x="897.39" y="-2540.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">View catalog of custom apps</text>
</g>
<!-- person&#45;&gt;complianceapp -->
<g id="edge10" class="edge">
<title>person&#45;&gt;complianceapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M162.73,-2616.08C87.24,-2543.57 0,-2433.81 0,-2313.8 0,-2313.8 0,-2313.8 0,-1369 0,-1240.08 377.68,-1145.51 606.07,-1100.12"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="606.33,-1102.74 613.18,-1098.71 605.32,-1097.59 606.33,-1102.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-1821 0,-1860.6 224.68,-1860.6 224.68,-1821 0,-1821"/>
<text text-anchor="start" x="3" y="-1845" font-family="Arial" font-size="14.00" fill="#c6c6c6">Verify consignment and declaration</text>
<text text-anchor="start" x="3" y="-1828.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">compliancy</text>
</g>
<!-- person&#45;&gt;principal -->
<g id="edge7" class="edge">
<title>person&#45;&gt;principal</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M289.56,-2584C297.99,-2529.06 307.83,-2464.87 315.81,-2412.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="318.39,-2413.36 316.93,-2405.55 313.2,-2412.56 318.39,-2413.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="144.19,-2493.19 144.19,-2515.99 303.49,-2515.99 303.49,-2493.19 144.19,-2493.19"/>
<text text-anchor="start" x="147.19" y="-2500.39" font-family="Arial" font-size="14.00" fill="#c6c6c6">Inform declaration status</text>
</g>
<!-- consignmentbff&#45;&gt;consignmentbackend -->
<g id="edge11" class="edge">
<title>consignmentbff&#45;&gt;consignmentbackend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1208,-1920.9C1208,-1874.94 1208,-1818.67 1208,-1771.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1210.63,-1771.51 1208,-1764.01 1205.38,-1771.51 1210.63,-1771.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1208,-1829.4 1208,-1852.2 1263.81,-1852.2 1263.81,-1829.4 1208,-1829.4"/>
<text text-anchor="start" x="1211" y="-1836.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Get app</text>
</g>
<!-- portalgateway&#45;&gt;masterdata -->
<!-- dmsbff&#45;&gt;service -->
<!-- service&#45;&gt;referencedata -->
<!-- referencedata&#45;&gt;crossroads -->
<!-- consignmentbackend&#45;&gt;dmsbackend -->
<g id="edge12" class="edge">
<title>consignmentbackend&#45;&gt;dmsbackend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1208,-1581.1C1208,-1546.24 1208,-1506.09 1208,-1470.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1210.63,-1470.34 1208,-1462.84 1205.38,-1470.34 1210.63,-1470.34"/>
</g>
<!-- portal&#45;&gt;consignmentbff -->
<g id="edge13" class="edge">
<title>portal&#45;&gt;consignmentbff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1208,-2222.95C1208,-2204.42 1208,-2184.39 1208,-2164.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1210.63,-2164.33 1208,-2156.83 1205.38,-2164.33 1210.63,-2164.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1053.36,-2188.2 1053.36,-2211 1208,-2211 1208,-2188.2 1053.36,-2188.2"/>
<text text-anchor="start" x="1056.36" y="-2195.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Navigate to specific app</text>
</g>
<!-- dmsbackend&#45;&gt;complianceapp -->
<g id="edge15" class="edge">
<title>dmsbackend&#45;&gt;complianceapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M976,-1208.43C954.44,-1193.5 933.09,-1178.73 912.82,-1164.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="914.47,-1162.65 906.81,-1160.54 911.48,-1166.97 914.47,-1162.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="737.6,-1183.83 737.6,-1206.63 940.46,-1206.63 940.46,-1183.83 737.6,-1183.83"/>
<text text-anchor="start" x="740.6" y="-1191.03" font-family="Arial" font-size="14.00" fill="#c6c6c6">Check consignment compliancy</text>
</g>
<!-- dmsbackend&#45;&gt;customs -->
<g id="edge14" class="edge">
<title>dmsbackend&#45;&gt;customs</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2346,-1194.88C2383.52,-1184.14 2420.56,-1172.75 2456.84,-1160.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2457.57,-1163.2 2463.85,-1158.33 2455.91,-1158.23 2457.57,-1163.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2310.37,-1176.81 2310.37,-1199.61 2406.65,-1199.61 2406.65,-1176.81 2310.37,-1176.81"/>
<text text-anchor="start" x="2313.37" y="-1184.01" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
<!-- principal&#45;&gt;person -->
<g id="edge2" class="edge">
<title>principal&#45;&gt;person</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M320.45,-2402.55C314.7,-2448.44 307.1,-2505.32 299,-2556 298.07,-2561.84 297.08,-2567.81 296.06,-2573.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="293.51,-2573.18 294.82,-2581.02 298.68,-2574.07 293.51,-2573.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="308.36,-2493.56 308.36,-2516.36 438.88,-2516.36 438.88,-2493.56 308.36,-2493.56"/>
<text text-anchor="start" x="311.36" y="-2500.76" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request declaration</text>
</g>
<!-- customs&#45;&gt;portalgateway -->
<g id="edge3" class="edge">
<title>customs&#45;&gt;portalgateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2466.76,-980.51C2465.17,-979.99 2463.58,-979.49 2462,-979 2424.69,-967.52 2389.43,-957.89 2355.88,-949.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2356.85,-947.37 2348.94,-948.2 2355.64,-952.48 2356.85,-947.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2219.41,-962.91 2219.41,-985.71 2406.7,-985.71 2406.7,-962.91 2219.41,-962.91"/>
<text text-anchor="start" x="2222.41" y="-970.11" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify physical control results</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1739pt" height="958pt"
 viewBox="0.00 0.00 1738.55 958.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 943.45)">
<g id="clust1" class="cluster">
<title>cluster_customer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="427.7,-299.6 427.7,-920.4 1257.7,-920.4 1257.7,-299.6 427.7,-299.6"/>
<text text-anchor="start" x="435.7" y="-907.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER</text>
</g>
<!-- person -->
<g id="node1" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="804.18,-859.2 467.22,-859.2 467.22,-679.2 804.18,-679.2 804.18,-859.2"/>
<text text-anchor="start" x="594.52" y="-783.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="487.27" y="-760.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person that manages consignments and</text>
<text text-anchor="start" x="546.48" y="-742.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">declares goods to customs</text>
</g>
<!-- email -->
<g id="node2" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="787.72,-519.6 467.68,-519.6 467.68,-339.6 787.72,-339.6 787.72,-519.6"/>
<text text-anchor="start" x="525.29" y="-423.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer e&#45;mail system</text>
</g>
<!-- erp -->
<g id="node3" class="node">
<title>erp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1217.72,-519.6 897.68,-519.6 897.68,-339.6 1217.72,-339.6 1217.72,-519.6"/>
<text text-anchor="start" x="961.62" y="-423.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer ERP system</text>
</g>
<!-- principal -->
<g id="node4" class="node">
<title>principal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1678.41,-859.2 1348.98,-859.2 1348.98,-679.2 1678.41,-679.2 1678.41,-859.2"/>
<text text-anchor="start" x="1477.27" y="-774.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal</text>
<text text-anchor="start" x="1369.04" y="-751.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the principal.</text>
</g>
<!-- streamsoftware -->
<g id="node5" class="node">
<title>streamsoftware</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="575.72,-180 255.68,-180 255.68,0 575.72,0 575.72,-180"/>
<text text-anchor="start" x="344.95" y="-104.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Stream Software</text>
<text text-anchor="start" x="289.39" y="-81.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of Stream</text>
<text text-anchor="start" x="384.02" y="-63.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Software.</text>
</g>
<!-- person&#45;&gt;email -->
<g id="edge5" class="edge">
<title>person&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M614.55,-679.22C610.73,-659.57 607.34,-638.77 605.37,-619.2 602.43,-590 604.23,-558.31 607.83,-529.38"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="610.39,-530.06 608.78,-522.28 605.19,-529.37 610.39,-530.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="605.37,-588 605.37,-610.8 785.7,-610.8 785.7,-588 605.37,-588"/>
<text text-anchor="start" x="608.37" y="-595.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Handle declaration requests</text>
</g>
<!-- person&#45;&gt;erp -->
<g id="edge6" class="edge">
<title>person&#45;&gt;erp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M746.85,-679.28C805.86,-632.07 878.41,-574.03 938.58,-525.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="940.02,-528.1 944.24,-521.37 936.74,-524 940.02,-528.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="859.35,-588 859.35,-610.8 1039.68,-610.8 1039.68,-588 859.35,-588"/>
<text text-anchor="start" x="862.35" y="-595.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Handle declaration requests</text>
</g>
<!-- person&#45;&gt;streamsoftware -->
<g id="edge4" class="edge">
<title>person&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M510.72,-679.37C462.03,-637.15 411.73,-582.19 385.7,-519.6 341.51,-413.33 361.49,-279.45 384.34,-189.86"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="386.87,-190.55 386.22,-182.63 381.79,-189.23 386.87,-190.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="385.7,-418.2 385.7,-441 412.7,-441 412.7,-418.2 385.7,-418.2"/>
<text text-anchor="start" x="388.7" y="-426.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- email&#45;&gt;streamsoftware -->
<g id="edge7" class="edge">
<title>email&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M572,-339.9C542.84,-293.46 507.06,-236.49 477.1,-188.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="479.4,-187.51 473.19,-182.55 474.95,-190.3 479.4,-187.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="528.05,-248.4 528.05,-271.2 753.51,-271.2 753.51,-248.4 528.05,-248.4"/>
<text text-anchor="start" x="531.05" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Send declaration request via e&#45;mail</text>
</g>
<!-- erp&#45;&gt;streamsoftware -->
<g id="edge8" class="edge">
<title>erp&#45;&gt;streamsoftware</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M939.13,-339.79C891.33,-306.16 834.78,-269.03 780.7,-240 718.75,-206.74 647.74,-176.19 584.93,-151.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="586.08,-149.15 578.14,-148.86 584.17,-154.04 586.08,-149.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="844.15,-240 844.15,-279.6 1058.73,-279.6 1058.73,-240 844.15,-240"/>
<text text-anchor="start" x="847.15" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Send declaration request via data</text>
<text text-anchor="start" x="847.15" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">exchange</text>
</g>
<!-- principal&#45;&gt;email -->
<g id="edge1" class="edge">
<title>principal&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1349.17,-692.38C1265.63,-655.53 1161.9,-612.26 1066.7,-579.6 969.21,-546.15 940.3,-552.71 842.7,-519.6 827.81,-514.55 812.48,-508.98 797.18,-503.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="798.43,-500.83 790.49,-500.59 796.55,-505.73 798.43,-500.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1166.44,-579.6 1166.44,-619.2 1398.92,-619.2 1398.92,-579.6 1166.44,-579.6"/>
<text text-anchor="start" x="1169.44" y="-603.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request for declaration of goods per</text>
<text text-anchor="start" x="1169.44" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">e&#45;mail</text>
</g>
<!-- principal&#45;&gt;erp -->
<g id="edge2" class="edge">
<title>principal&#45;&gt;erp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1500.9,-679.42C1491.92,-644.6 1476.65,-606.61 1450.7,-579.6 1391.55,-518.04 1304.38,-481.63 1227.16,-460.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1228.16,-457.78 1220.23,-458.36 1226.79,-462.85 1228.16,-457.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1478.32,-579.6 1478.32,-619.2 1708.45,-619.2 1708.45,-579.6 1478.32,-579.6"/>
<text text-anchor="start" x="1481.32" y="-603.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request for declaration of goods via</text>
<text text-anchor="start" x="1481.32" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">data exchange</text>
</g>
<!-- streamsoftware&#45;&gt;person -->
<g id="edge3" class="edge">
<title>streamsoftware&#45;&gt;person</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M255.77,-136.41C175.48,-168.2 85.46,-219.64 38.29,-299.6 -11.39,-383.82 -13.93,-436.94 38.29,-519.6 127.79,-661.27 315.83,-722.25 457.18,-748.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="456.45,-751.01 464.3,-749.76 457.38,-745.84 456.45,-751.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="38.29,-418.2 38.29,-441 193.7,-441 193.7,-418.2 38.29,-418.2"/>
<text text-anchor="start" x="41.29" y="-425.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify declaration status</text>
</g>
</g>
</svg>
`;case"customs":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1078pt" height="621pt"
 viewBox="0.00 0.00 1078.10 621.50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 606.45)">
<g id="clust1" class="cluster">
<title>cluster_customs</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-302.2 8,-583.4 1040,-583.4 1040,-302.2 8,-302.2"/>
<text text-anchor="start" x="16" y="-570.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_streamsoftware</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="623,-8 623,-273.2 1007,-273.2 1007,-8 623,-8"/>
<text text-anchor="start" x="631" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STREAM SOFTWARE</text>
</g>
<!-- officer -->
<g id="node1" class="node">
<title>officer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-522.2 47.98,-522.2 47.98,-342.2 368.02,-342.2 368.02,-522.2"/>
<text text-anchor="start" x="142.01" y="-437.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs officer</text>
<text text-anchor="start" x="105.86" y="-414.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">The national customs authority</text>
</g>
<!-- system -->
<g id="node2" class="node">
<title>system</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1000.02,-522.2 679.98,-522.2 679.98,-342.2 1000.02,-342.2 1000.02,-522.2"/>
<text text-anchor="start" x="769.79" y="-446.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs system</text>
<text text-anchor="start" x="709.93" y="-423.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">The system that is used by the national</text>
<text text-anchor="start" x="812.08" y="-405.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">customs</text>
</g>
<!-- complianceapp -->
<g id="node3" class="node">
<title>complianceapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="975.02,-220 654.98,-220 654.98,-40 975.02,-40 975.02,-220"/>
<text text-anchor="start" x="715.72" y="-144.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Compliance Application</text>
<text text-anchor="start" x="677.42" y="-121.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Collection of compliance applications and</text>
<text text-anchor="start" x="754.97" y="-103.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">business modules</text>
</g>
<!-- officer&#45;&gt;system -->
<g id="edge1" class="edge">
<title>officer&#45;&gt;system</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.89,-432.2C460.06,-432.2 575.9,-432.2 669.76,-432.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="669.69,-434.83 677.19,-432.2 669.69,-429.58 669.69,-434.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.95,-435.2 422.95,-458 625.05,-458 625.05,-435.2 422.95,-435.2"/>
<text text-anchor="start" x="425.95" y="-442.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage physical control results</text>
</g>
<!-- system&#45;&gt;complianceapp -->
<g id="edge2" class="edge">
<title>system&#45;&gt;complianceapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M823.42,-342.44C820.75,-325.15 818.32,-306.99 816.2,-283.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="818.83,-283.46 815.57,-276.21 813.6,-283.91 818.83,-283.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.48,-308.4 631.48,-331.2 818.77,-331.2 818.77,-308.4 631.48,-308.4"/>
<text text-anchor="start" x="634.48" y="-315.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify physical control results</text>
</g>
<!-- complianceapp&#45;&gt;system -->
<g id="edge3" class="edge">
<title>complianceapp&#45;&gt;system</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M826.84,-273.2C828.51,-293.17 830.18,-313.33 831.76,-332.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="829.11,-332.08 832.35,-339.33 834.34,-331.64 829.11,-332.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="733.44,-284.95 733.44,-307.75 829.72,-307.75 829.72,-284.95 733.44,-284.95"/>
<text text-anchor="start" x="736.44" y="-292.15" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
</g>
</svg>
`;case"principal":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1014pt" height="619pt"
 viewBox="0.00 0.00 1014.10 618.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 603.85)">
<g id="clust1" class="cluster">
<title>cluster_principal</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-299.6 8,-580.8 976,-580.8 976,-299.6 8,-299.6"/>
<text text-anchor="start" x="16" y="-567.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PRINCIPAL</text>
</g>
<!-- person -->
<g id="node1" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-519.6 47.98,-519.6 47.98,-339.6 368.02,-339.6 368.02,-519.6"/>
<text text-anchor="start" x="171.57" y="-443.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal</text>
<text text-anchor="start" x="81.68" y="-420.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person who initiates a declaration</text>
<text text-anchor="start" x="180.9" y="-402.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">request.</text>
</g>
<!-- erp -->
<g id="node2" class="node">
<title>erp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="936.02,-519.6 615.98,-519.6 615.98,-339.6 936.02,-339.6 936.02,-519.6"/>
<text text-anchor="start" x="684.67" y="-423.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Principal ERP system</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="658.63,-180 323.37,-180 323.37,0 658.63,0 658.63,-180"/>
<text text-anchor="start" x="449.82" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="343.43" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customer.</text>
</g>
<!-- person&#45;&gt;erp -->
<g id="edge1" class="edge">
<title>person&#45;&gt;erp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.73,-429.6C442,-429.6 530.39,-429.6 605.9,-429.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="605.47,-432.23 612.97,-429.6 605.47,-426.98 605.47,-432.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.24,-432.6 423.24,-455.4 560.76,-455.4 560.76,-432.6 423.24,-432.6"/>
<text text-anchor="start" x="426.24" y="-439.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage his business</text>
</g>
<!-- person&#45;&gt;customer -->
<g id="edge2" class="edge">
<title>person&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M272.05,-339.73C295.94,-307.7 323.77,-271.66 350.53,-240 365.28,-222.54 381.49,-204.44 397.49,-187.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="399.09,-189.27 402.27,-181.99 395.24,-185.7 399.09,-189.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="350.53,-240 350.53,-279.6 583,-279.6 583,-240 350.53,-240"/>
<text text-anchor="start" x="353.53" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request for declaration of goods per</text>
<text text-anchor="start" x="353.53" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">e&#45;mail</text>
</g>
<!-- erp&#45;&gt;customer -->
<g id="edge3" class="edge">
<title>erp&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M701.12,-339.9C661.67,-293.17 613.23,-235.78 572.8,-187.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="574.92,-186.34 568.07,-182.3 570.91,-189.72 574.92,-186.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="642.05,-240 642.05,-279.6 872.18,-279.6 872.18,-240 642.05,-240"/>
<text text-anchor="start" x="645.05" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request for declaration of goods via</text>
<text text-anchor="start" x="645.05" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">data exchange</text>
</g>
</g>
</svg>
`;case"consignmentApp":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1855pt" height="1597pt"
 viewBox="0.00 0.00 1855.10 1596.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1581.65)">
<g id="clust1" class="cluster">
<title>cluster_consignmentapp</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1558.6 1378,-1558.6 1378,-8 8,-8"/>
<text text-anchor="start" x="16" y="-1545.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CONSIGNMENT APPLICATION</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_customer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1417,-1285.4 1417,-1550.6 1817,-1550.6 1817,-1285.4 1417,-1285.4"/>
<text text-anchor="start" x="1425" y="-1537.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER</text>
</g>
<!-- portalgateway -->
<g id="node1" class="node">
<title>portalgateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1497.4 47.98,-1497.4 47.98,-1317.4 368.02,-1317.4 368.02,-1497.4"/>
<text text-anchor="start" x="143.05" y="-1422.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Portal Gateway</text>
<text text-anchor="start" x="177.3" y="-1401.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="147.13" y="-1379.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gateway to ...todo</text>
</g>
<!-- dmsbff -->
<g id="node2" class="node">
<title>dmsbff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1497.4 477.98,-1497.4 477.98,-1317.4 798.02,-1317.4 798.02,-1497.4"/>
<text text-anchor="start" x="582.36" y="-1403.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="626.31" y="-1422.5" font-family="Arial" font-size="19.00" fill="#eff6ff">DMS BFF</text>
<text text-anchor="start" x="719.75" y="-1403.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="626.31" y="-1401.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="626.31" y="-1379.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- service -->
<g id="node3" class="node">
<title>service</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1338.02,-1497.4 1017.98,-1497.4 1017.98,-1317.4 1338.02,-1317.4 1338.02,-1497.4"/>
<text text-anchor="start" x="1123.93" y="-1403.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1167.88" y="-1422.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Simulator</text>
<text text-anchor="start" x="1258.18" y="-1403.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1167.88" y="-1401.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1167.88" y="-1379.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- masterdata -->
<g id="node4" class="node">
<title>masterdata</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1174.6 47.98,-1174.6 47.98,-994.6 368.02,-994.6 368.02,-1174.6"/>
<text text-anchor="start" x="138.77" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="182.72" y="-1088.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Master data</text>
<text text-anchor="start" x="303.34" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="182.72" y="-1067.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Azure Blob storage</text>
</g>
<!-- referencedata -->
<g id="node5" class="node">
<title>referencedata</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="870.02,-1174.6 549.98,-1174.6 549.98,-994.6 870.02,-994.6 870.02,-1174.6"/>
<text text-anchor="start" x="631.1" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="675.04" y="-1088.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Reference data</text>
<text text-anchor="start" x="815.02" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="675.04" y="-1067.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Azure Blob storage</text>
</g>
<!-- portal -->
<g id="node6" class="node">
<title>portal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1337.8,-1174.6 980.2,-1174.6 980.2,-994.6 1337.8,-994.6 1337.8,-1174.6"/>
<text text-anchor="start" x="1028.32" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1072.26" y="-1099.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Portal</text>
<text text-anchor="start" x="1315.79" y="-1080.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1072.26" y="-1078.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">React, Typescript</text>
<text text-anchor="start" x="1072.26" y="-1056.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main app to manage consignments</text>
</g>
<!-- consignemntui -->
<g id="node7" class="node">
<title>consignemntui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1319.02,-851.8 998.98,-851.8 998.98,-671.8 1319.02,-671.8 1319.02,-851.8"/>
<text text-anchor="start" x="1076.94" y="-757.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1120.89" y="-765.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment UI</text>
<text text-anchor="start" x="1267.17" y="-757.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1120.89" y="-744.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">React</text>
</g>
<!-- consignmentbackend -->
<g id="node8" class="node">
<title>consignmentbackend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1319.02,-529 998.98,-529 998.98,-349 1319.02,-349 1319.02,-529"/>
<text text-anchor="start" x="1049.47" y="-434.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1093.42" y="-454.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment Backend</text>
<text text-anchor="start" x="1294.64" y="-434.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1093.42" y="-432.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1093.42" y="-411.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">???</text>
</g>
<!-- dmsbackend -->
<g id="node9" class="node">
<title>dmsbackend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1319.02,-228 998.98,-228 998.98,-48 1319.02,-48 1319.02,-228"/>
<text text-anchor="start" x="1084.33" y="-133.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1128.28" y="-153.1" font-family="Arial" font-size="19.00" fill="#eff6ff">DMS Backend</text>
<text text-anchor="start" x="1259.78" y="-133.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1128.28" y="-131.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Core</text>
<text text-anchor="start" x="1128.28" y="-110.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">??</text>
</g>
<!-- person -->
<g id="node10" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1785.48,-1497.4 1448.52,-1497.4 1448.52,-1317.4 1785.48,-1317.4 1785.48,-1497.4"/>
<text text-anchor="start" x="1575.82" y="-1421.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="1468.57" y="-1398.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person that manages consignments and</text>
<text text-anchor="start" x="1527.79" y="-1380.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">declares goods to customs</text>
</g>
<!-- portalgateway&#45;&gt;masterdata -->
<!-- dmsbff&#45;&gt;service -->
<!-- service&#45;&gt;referencedata -->
<!-- portal&#45;&gt;consignemntui -->
<g id="edge6" class="edge">
<title>portal&#45;&gt;consignemntui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1159,-994.67C1159,-953.47 1159,-904.36 1159,-861.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1161.63,-862.16 1159,-854.66 1156.38,-862.16 1161.63,-862.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1159,-911.8 1159,-934.6 1313.64,-934.6 1313.64,-911.8 1159,-911.8"/>
<text text-anchor="start" x="1162" y="-919" font-family="Arial" font-size="14.00" fill="#c6c6c6">Navigate to specific app</text>
</g>
<!-- consignemntui&#45;&gt;consignmentbackend -->
<g id="edge7" class="edge">
<title>consignemntui&#45;&gt;consignmentbackend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1159,-671.87C1159,-630.67 1159,-581.56 1159,-539.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1161.63,-539.36 1159,-531.86 1156.38,-539.36 1161.63,-539.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1159,-589 1159,-611.8 1214.81,-611.8 1214.81,-589 1159,-589"/>
<text text-anchor="start" x="1162" y="-596.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Get app</text>
</g>
<!-- consignmentbackend&#45;&gt;dmsbackend -->
<g id="edge8" class="edge">
<title>consignmentbackend&#45;&gt;dmsbackend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1159,-349.1C1159,-314.24 1159,-274.09 1159,-238.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1161.63,-238.34 1159,-230.84 1156.38,-238.34 1161.63,-238.34"/>
</g>
<!-- person&#45;&gt;portal -->
<g id="edge4" class="edge">
<title>person&#45;&gt;portal</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1469.84,-1317.41C1448.43,-1305.94 1426.4,-1294.91 1405,-1285.4 1368.57,-1269.22 1353.4,-1278.84 1319.79,-1257.4 1288.16,-1237.21 1258.52,-1209.39 1233.52,-1182.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1235.59,-1180.38 1228.62,-1176.56 1231.68,-1183.89 1235.59,-1180.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1319.79,-1234.6 1319.79,-1257.4 1504,-1257.4 1504,-1234.6 1319.79,-1234.6"/>
<text text-anchor="start" x="1322.79" y="-1241.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">View catalog of custom apps</text>
</g>
<!-- person&#45;&gt;consignemntui -->
<g id="edge5" class="edge">
<title>person&#45;&gt;consignemntui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1581.32,-1317.5C1536.25,-1212.58 1451.09,-1036.62 1341,-911.8 1324.74,-893.36 1306.06,-875.36 1287,-858.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1288.77,-856.66 1281.39,-853.73 1285.33,-860.63 1288.77,-856.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1513.81,-1073.2 1513.81,-1096 1767.29,-1096 1767.29,-1073.2 1513.81,-1073.2"/>
<text text-anchor="start" x="1516.81" y="-1080.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage consignments and declarations</text>
</g>
</g>
</svg>
`;case"customsProduct":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1742pt" height="1073pt"
 viewBox="0.00 0.00 1742.10 1073.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1058.25)">
<g id="clust1" class="cluster">
<title>cluster_streamsoftware</title>
<polygon fill="#1a468d" stroke="#1c3979" points="607,-328 607,-694.4 1704,-694.4 1704,-328 607,-328"/>
<text text-anchor="start" x="615" y="-681.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STREAM SOFTWARE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_customsproduct</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="639,-360 639,-641.2 1672,-641.2 1672,-360 639,-360"/>
<text text-anchor="start" x="647" y="-628.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMS PRODUCT</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_customs</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 1040,-289.2 1040,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMS</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_customer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="891,-770 891,-1035.2 1291,-1035.2 1291,-770 891,-770"/>
<text text-anchor="start" x="899" y="-1022.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER</text>
</g>
<!-- consignmentapp -->
<g id="node1" class="node">
<title>consignmentapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="999.02,-580 678.98,-580 678.98,-400 999.02,-400 999.02,-580"/>
<text text-anchor="start" x="733.91" y="-504.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Consignment Application</text>
<text text-anchor="start" x="711.43" y="-481.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Collection of customs applications and</text>
<text text-anchor="start" x="778.97" y="-463.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">business modules</text>
</g>
<!-- complianceapp -->
<g id="node2" class="node">
<title>complianceapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1632.02,-580 1311.98,-580 1311.98,-400 1632.02,-400 1632.02,-580"/>
<text text-anchor="start" x="1372.72" y="-504.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Compliance Application</text>
<text text-anchor="start" x="1334.42" y="-481.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Collection of compliance applications and</text>
<text text-anchor="start" x="1411.97" y="-463.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">business modules</text>
</g>
<!-- officer -->
<g id="node3" class="node">
<title>officer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text text-anchor="start" x="142.01" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs officer</text>
<text text-anchor="start" x="105.86" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The national customs authority</text>
</g>
<!-- system -->
<g id="node4" class="node">
<title>system</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1000.02,-228 679.98,-228 679.98,-48 1000.02,-48 1000.02,-228"/>
<text text-anchor="start" x="769.79" y="-152.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs system</text>
<text text-anchor="start" x="709.93" y="-129.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The system that is used by the national</text>
<text text-anchor="start" x="812.08" y="-111.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">customs</text>
</g>
<!-- person -->
<g id="node5" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1259.48,-982 922.52,-982 922.52,-802 1259.48,-802 1259.48,-982"/>
<text text-anchor="start" x="1049.82" y="-906.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="942.57" y="-883.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person that manages consignments and</text>
<text text-anchor="start" x="1001.79" y="-865.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">declares goods to customs</text>
</g>
<!-- consignmentapp&#45;&gt;complianceapp -->
<g id="edge3" class="edge">
<title>consignmentapp&#45;&gt;complianceapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M998.73,-490C1091.14,-490 1207.39,-490 1301.55,-490"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1301.52,-492.63 1309.02,-490 1301.52,-487.38 1301.52,-492.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1054.07,-493 1054.07,-515.8 1256.93,-515.8 1256.93,-493 1054.07,-493"/>
<text text-anchor="start" x="1057.07" y="-500.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Check consignment compliancy</text>
</g>
<!-- consignmentapp&#45;&gt;system -->
<g id="edge2" class="edge">
<title>consignmentapp&#45;&gt;system</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M736.97,-400.26C713.6,-369.37 698.91,-333.36 711.72,-297.2 719.34,-275.72 731.25,-255.02 744.82,-236.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="746.8,-237.82 749.14,-230.23 742.57,-234.7 746.8,-237.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="711.72,-297.2 711.72,-320 808,-320 808,-297.2 711.72,-297.2"/>
<text text-anchor="start" x="714.72" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
<!-- consignmentapp&#45;&gt;person -->
<g id="edge1" class="edge">
<title>consignmentapp&#45;&gt;person</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M796.86,-579.78C779.26,-630.59 768.96,-693.64 798.59,-742 824.98,-785.06 868.15,-816.17 913.32,-838.43"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="912.05,-840.74 919.95,-841.61 914.32,-836 912.05,-840.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="798.59,-710.8 798.59,-733.6 954,-733.6 954,-710.8 798.59,-710.8"/>
<text text-anchor="start" x="801.59" y="-718" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify declaration status</text>
</g>
<!-- officer&#45;&gt;system -->
<g id="edge4" class="edge">
<title>officer&#45;&gt;system</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.89,-138C460.06,-138 575.9,-138 669.76,-138"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="669.69,-140.63 677.19,-138 669.69,-135.38 669.69,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.95,-141 422.95,-163.8 625.05,-163.8 625.05,-141 422.95,-141"/>
<text text-anchor="start" x="425.95" y="-148.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage physical control results</text>
</g>
<!-- system&#45;&gt;consignmentapp -->
<g id="edge7" class="edge">
<title>system&#45;&gt;consignmentapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M839.75,-227.98C839.6,-277.37 839.43,-338.93 839.28,-389.86"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="836.66,-389.69 839.26,-397.2 841.91,-389.71 836.66,-389.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="839.53,-297.2 839.53,-320 1026.82,-320 1026.82,-297.2 839.53,-297.2"/>
<text text-anchor="start" x="842.53" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify physical control results</text>
</g>
<!-- person&#45;&gt;consignmentapp -->
<g id="edge5" class="edge">
<title>person&#45;&gt;consignmentapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1038.27,-802.34C1019.2,-770.66 997.36,-734.8 977,-702.4 953.41,-664.87 926.93,-623.99 903.51,-588.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="905.91,-587.15 899.6,-582.32 901.52,-590.03 905.91,-587.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="999.26,-710.8 999.26,-733.6 1265.22,-733.6 1265.22,-710.8 999.26,-710.8"/>
<text text-anchor="start" x="1002.26" y="-718" font-family="Arial" font-size="14.00" fill="#c6c6c6">Manage consignments and declare goods</text>
</g>
<!-- person&#45;&gt;complianceapp -->
<g id="edge6" class="edge">
<title>person&#45;&gt;complianceapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1223.46,-802.01C1247.38,-783.43 1271.28,-763.05 1292,-742 1337.42,-695.86 1380.04,-637.4 1412.4,-588.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1414.53,-590.05 1416.45,-582.34 1410.14,-587.17 1414.53,-590.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1326,-702.4 1326,-742 1550.68,-742 1550.68,-702.4 1326,-702.4"/>
<text text-anchor="start" x="1329" y="-726.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Verify consignment and declaration</text>
<text text-anchor="start" x="1329" y="-709.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">compliancy</text>
</g>
</g>
</svg>
`;case"streamSoftware":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1750pt" height="925pt"
 viewBox="0.00 0.00 1750.10 924.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 909.85)">
<g id="clust1" class="cluster">
<title>cluster_streamsoftware</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-886.8 1268,-886.8 1268,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-873.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STREAM SOFTWARE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_customer</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1312,-613.6 1312,-878.8 1712,-878.8 1712,-613.6 1312,-613.6"/>
<text text-anchor="start" x="1320" y="-865.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER</text>
</g>
<!-- supportstaff -->
<g id="node1" class="node">
<title>supportstaff</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1124.02,-825.6 803.98,-825.6 803.98,-645.6 1124.02,-645.6 1124.02,-825.6"/>
<text text-anchor="start" x="867.91" y="-749.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer support staff</text>
<text text-anchor="start" x="840.62" y="-726.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer support staff within Stream</text>
<text text-anchor="start" x="931.91" y="-708.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Softwarer</text>
</g>
<!-- supportsystem -->
<g id="node2" class="node">
<title>supportsystem</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-502.8 477.98,-502.8 477.98,-322.8 798.02,-322.8 798.02,-502.8"/>
<text text-anchor="start" x="529.77" y="-427.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer support system</text>
<text text-anchor="start" x="501.69" y="-403.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The system to manage customer support</text>
<text text-anchor="start" x="567.56" y="-385.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">requests, tickets, etc.</text>
</g>
<!-- customsproduct -->
<g id="node3" class="node">
<title>customsproduct</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.11,-502.8 907.89,-502.8 907.89,-322.8 1228.11,-322.8 1228.11,-502.8"/>
<text text-anchor="start" x="996.19" y="-427.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs product</text>
<text text-anchor="start" x="927.94" y="-403.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The streamliner cloud product for customs</text>
<text text-anchor="start" x="1025.48" y="-385.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">delcarations.</text>
</g>
<!-- crossroads -->
<g id="node4" class="node">
<title>crossroads</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-825.6 47.98,-825.6 47.98,-645.6 368.02,-645.6 368.02,-825.6"/>
<text text-anchor="start" x="155.73" y="-729.9" font-family="Arial" font-size="19.00" fill="#eff6ff">CrossRoads</text>
</g>
<!-- logisticsproduct -->
<g id="node5" class="node">
<title>logisticsproduct</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text text-anchor="start" x="73.34" y="-418.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Logistics, Finance &amp; Accounting</text>
<text text-anchor="start" x="176.31" y="-395.7" font-family="Arial" font-size="19.00" fill="#eff6ff">product</text>
</g>
<!-- person -->
<g id="node6" class="node">
<title>person</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1680.48,-825.6 1343.52,-825.6 1343.52,-645.6 1680.48,-645.6 1680.48,-825.6"/>
<text text-anchor="start" x="1470.82" y="-749.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="1363.57" y="-726.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">The person that manages consignments and</text>
<text text-anchor="start" x="1422.79" y="-708.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">declares goods to customs</text>
</g>
<!-- customs -->
<g id="node7" class="node">
<title>customs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1231.71,-180 902.29,-180 902.29,0 1231.71,0 1231.71,-180"/>
<text text-anchor="start" x="1029.52" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customs</text>
<text text-anchor="start" x="922.35" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The enterprise environment of the customs.</text>
</g>
<!-- supportstaff&#45;&gt;supportsystem -->
<g id="edge2" class="edge">
<title>supportstaff&#45;&gt;supportsystem</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M804.32,-669.48C765.45,-647.54 726.87,-619.73 698.21,-585.6 680.64,-564.67 668.07,-538.29 659.13,-512.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="661.67,-511.85 656.82,-505.56 656.69,-513.5 661.67,-511.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="698.21,-562.8 698.21,-585.6 947,-585.6 947,-562.8 698.21,-562.8"/>
<text text-anchor="start" x="701.21" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Uses this to follow up on support cases</text>
</g>
<!-- supportstaff&#45;&gt;customsproduct -->
<g id="edge3" class="edge">
<title>supportstaff&#45;&gt;customsproduct</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M964.8,-645.7C967.01,-618.58 971.46,-589.02 979.95,-562.8 985.54,-545.55 993.38,-528.16 1002.1,-511.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1004.32,-513.08 1005.59,-505.24 999.7,-510.57 1004.32,-513.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="979.95,-562.8 979.95,-585.6 1140,-585.6 1140,-562.8 979.95,-562.8"/>
<text text-anchor="start" x="982.95" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Assist in customer cases</text>
</g>
<!-- customsproduct&#45;&gt;person -->
<g id="edge5" class="edge">
<title>customsproduct&#45;&gt;person</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1156.6,-502.76C1186.52,-530.75 1220.9,-560.8 1254.59,-585.6 1272.02,-598.42 1305.6,-618.81 1342.91,-640.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1341.52,-642.67 1349.33,-644.15 1344.15,-638.12 1341.52,-642.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1254.59,-562.8 1254.59,-585.6 1410,-585.6 1410,-562.8 1254.59,-562.8"/>
<text text-anchor="start" x="1257.59" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify declaration status</text>
</g>
<!-- customsproduct&#45;&gt;customs -->
<g id="edge4" class="edge">
<title>customsproduct&#45;&gt;customs</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M977.69,-323.19C963.77,-304.64 951.47,-284.18 943.72,-262.8 934.36,-236.94 941.03,-211.5 955.16,-188.45"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="957.31,-189.96 959.25,-182.26 952.93,-187.07 957.31,-189.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.72,-240 943.72,-262.8 1040,-262.8 1040,-240 943.72,-240"/>
<text text-anchor="start" x="946.72" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Declare goods</text>
</g>
<!-- crossroads&#45;&gt;logisticsproduct -->
<!-- person&#45;&gt;supportstaff -->
<g id="edge7" class="edge">
<title>person&#45;&gt;supportstaff</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1343.71,-735.6C1277.2,-735.6 1200.87,-735.6 1134.17,-735.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1134.5,-732.98 1127,-735.6 1134.5,-738.23 1134.5,-732.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1179.4,-738.6 1179.4,-761.4 1288.13,-761.4 1288.13,-738.6 1179.4,-738.6"/>
<text text-anchor="start" x="1182.4" y="-745.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Request support</text>
</g>
<!-- person&#45;&gt;customsproduct -->
<g id="edge8" class="edge">
<title>person&#45;&gt;customsproduct</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1485.98,-645.81C1473.78,-616.37 1456.59,-585.39 1433,-562.8 1379.17,-511.25 1305.09,-476.6 1237.73,-453.79"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1238.66,-451.34 1230.72,-451.47 1237.01,-456.32 1238.66,-451.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1449.96,-562.8 1449.96,-585.6 1476.96,-585.6 1476.96,-562.8 1449.96,-562.8"/>
<text text-anchor="start" x="1452.96" y="-571" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- customs&#45;&gt;customsproduct -->
<g id="edge1" class="edge">
<title>customs&#45;&gt;customsproduct</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1067.28,-179.83C1067.41,-221.01 1067.56,-270.12 1067.69,-312.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1065.06,-312.35 1067.71,-319.84 1070.31,-312.33 1065.06,-312.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1067.53,-240 1067.53,-262.8 1254.82,-262.8 1254.82,-240 1067.53,-240"/>
<text text-anchor="start" x="1070.53" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Notify physical control results</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+t)}}function r(t){switch(t){case"index":return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  Principal[Principal]\r
  Customer[Customer]\r
  StreamSoftware[Stream Software]\r
  Customs[Customs]\r
  Principal -. "Request declaration" .-> Customer\r
  Customer -. "Inform declaration status" .-> Principal\r
  Customer -. "[...]" .-> StreamSoftware\r
  StreamSoftware -. "Notify declaration status" .-> Customer\r
  StreamSoftware -. "Declare goods" .-> Customs\r
  Customs -. "Verify compliancy actions" .-> StreamSoftware\r
`;case"systemLandscape":return`---\r
title: "System landscape"\r
---\r
graph LR\r
  Principal[Principal]\r
  Customer[Customer]\r
  StreamSoftware[Stream Software]\r
  Customs[Customs]\r
  Principal -. "Request declaration" .-> Customer\r
  Customer -. "Inform declaration status" .-> Principal\r
  Customer -. "Manage declarations" .-> StreamSoftware\r
  StreamSoftware -. "Notify declaration status" .-> Customer\r
  StreamSoftware -. "Declare goods" .-> Customs\r
  Customs -. "Verify compliancy actions" .-> StreamSoftware\r
`;case"detailedSystemLandscape":return`---\r
title: "System landscape consignment app"\r
---\r
graph TB\r
  Principal[Principal]\r
  Customs[Customs]\r
  subgraph Customer["Customer"]\r
    Customer.Person[fa:fa-user Customer]\r
  end\r
  subgraph StreamSoftware["Stream Software"]\r
    subgraph StreamSoftware.CustomsProduct["Customs product"]\r
      subgraph StreamSoftware.CustomsProduct.ConsignmentApp["Consignment Application"]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.PortalGateway[Portal Gateway]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.DmsBff[DMS BFF]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.Service[Simulator]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.MasterData[Master data]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.ReferenceData[Reference data]\r
        subgraph StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI["Consignment UI"]\r
          StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI.ConsignmentBff[Consignment BFF]\r
        end\r
        StreamSoftware.CustomsProduct.ConsignmentApp.ConsignmentBackend[Consignment Backend]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.Portal[Portal]\r
        StreamSoftware.CustomsProduct.ConsignmentApp.DmsBackend[DMS Backend]\r
      end\r
      StreamSoftware.CustomsProduct.ComplianceApp[Compliance Application]\r
    end\r
    StreamSoftware.CrossRoads[CrossRoads]\r
    StreamSoftware.LogisticsProduct[Logistics, Finance & Accounting product]\r
  end\r
  StreamSoftware.CustomsProduct.ConsignmentApp.ConsignmentBackend -.-> StreamSoftware.CustomsProduct.ConsignmentApp.DmsBackend\r
  StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI.ConsignmentBff -. "Get app" .-> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignmentBackend\r
  Customer.Person -. "View catalog of custom apps" .-> StreamSoftware.CustomsProduct.ConsignmentApp.Portal\r
  Customer.Person -. "Verify consignment and declaration compliancy" .-> StreamSoftware.CustomsProduct.ComplianceApp\r
  Principal -. "Request declaration" .-> Customer\r
  Customer -. "Inform declaration status" .-> Principal\r
  Customs -. "Notify physical control results" .-> StreamSoftware.CustomsProduct.ConsignmentApp\r
  StreamSoftware.CustomsProduct.ConsignmentApp -. "Declare goods" .-> Customs\r
  StreamSoftware.CustomsProduct.ConsignmentApp -. "Check consignment compliancy" .-> StreamSoftware.CustomsProduct.ComplianceApp\r
  StreamSoftware.CustomsProduct.ConsignmentApp.Portal -. "Navigate to specific app" .-> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI\r
  Customer.Person -. "Manage consignments and declarations" .-> StreamSoftware.CustomsProduct.ConsignmentApp.ConsignemntUI\r
`;case"customer":return`---\r
title: "Customer system landscape"\r
---\r
graph TB\r
  Principal[Principal]\r
  StreamSoftware[Stream Software]\r
  subgraph Customer["Customer"]\r
    Customer.Person[fa:fa-user Customer]\r
    Customer.Email[Customer e-mail system]\r
    Customer.ERP[Customer ERP system]\r
  end\r
  Principal -. "Request for declaration of goods per e-mail" .-> Customer.Email\r
  Principal -. "Request for declaration of goods via data exchange" .-> Customer.ERP\r
  StreamSoftware -. "Notify declaration status" .-> Customer.Person\r
  Customer.Person -. "Handle declaration requests" .-> Customer.Email\r
  Customer.Person -. "Handle declaration requests" .-> Customer.ERP\r
  Customer.Person -. "[...]" .-> StreamSoftware\r
  Customer.Email -. "Send declaration request via e-mail" .-> StreamSoftware\r
  Customer.ERP -. "Send declaration request via data exchange" .-> StreamSoftware\r
`;case"customs":return`---\r
title: "Customs system landscape"\r
---\r
graph TB\r
  subgraph Customs["Customs"]\r
    Customs.Officer[fa:fa-user Customs officer]\r
    Customs.System[Customs system]\r
  end\r
  subgraph StreamSoftware["Stream Software"]\r
    StreamSoftware.CustomsProductComplianceApp[Compliance Application]\r
  end\r
  Customs.Officer -. "Manage physical control results" .-> Customs.System\r
  StreamSoftware -. "Declare goods" .-> Customs.System\r
  Customs.System -. "Notify physical control results" .-> StreamSoftware\r
`;case"principal":return`---\r
title: "Principal system landscape"\r
---\r
graph TB\r
  subgraph Principal["Principal"]\r
    Principal.Person[fa:fa-user Principal]\r
    Principal.ERP[Principal ERP system]\r
  end\r
  Customer[Customer]\r
  Principal.Person -. "Manage his business" .-> Principal.ERP\r
  Principal.Person -. "Request for declaration of goods per e-mail" .-> Customer\r
  Principal.ERP -. "Request for declaration of goods via data exchange" .-> Customer\r
`;case"consignmentApp":return`---\r
title: "Consignment App"\r
---\r
graph TB\r
  subgraph StreamSoftwareCustomsProductConsignmentApp["Consignment Application"]\r
    StreamSoftwareCustomsProductConsignmentApp.PortalGateway[Portal Gateway]\r
    StreamSoftwareCustomsProductConsignmentApp.DmsBff[DMS BFF]\r
    StreamSoftwareCustomsProductConsignmentApp.Service[Simulator]\r
    StreamSoftwareCustomsProductConsignmentApp.MasterData[Master data]\r
    StreamSoftwareCustomsProductConsignmentApp.ReferenceData[Reference data]\r
    StreamSoftwareCustomsProductConsignmentApp.Portal[Portal]\r
    StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI[Consignment UI]\r
    StreamSoftwareCustomsProductConsignmentApp.ConsignmentBackend[Consignment Backend]\r
    StreamSoftwareCustomsProductConsignmentApp.DmsBackend[DMS Backend]\r
  end\r
  subgraph Customer["Customer"]\r
    Customer.Person[fa:fa-user Customer]\r
  end\r
  StreamSoftwareCustomsProductConsignmentApp.ConsignmentBackend -.-> StreamSoftwareCustomsProductConsignmentApp.DmsBackend\r
  StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI -. "Get app" .-> StreamSoftwareCustomsProductConsignmentApp.ConsignmentBackend\r
  StreamSoftwareCustomsProductConsignmentApp.Portal -. "Navigate to specific app" .-> StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI\r
  Customer.Person -. "Manage consignments and declarations" .-> StreamSoftwareCustomsProductConsignmentApp.ConsignemntUI\r
  Customer.Person -. "View catalog of custom apps" .-> StreamSoftwareCustomsProductConsignmentApp.Portal\r
`;case"customsProduct":return`---\r
title: "Customs product"\r
---\r
graph TB\r
  subgraph StreamSoftware["Stream Software"]\r
    subgraph StreamSoftware.CustomsProduct["Customs product"]\r
      StreamSoftware.CustomsProduct.ConsignmentApp[Consignment Application]\r
      StreamSoftware.CustomsProduct.ComplianceApp[Compliance Application]\r
    end\r
  end\r
  subgraph Customs["Customs"]\r
    Customs.Officer[fa:fa-user Customs officer]\r
    Customs.System[Customs system]\r
  end\r
  subgraph Customer["Customer"]\r
    Customer.Person[fa:fa-user Customer]\r
  end\r
  StreamSoftware.CustomsProduct.ConsignmentApp -. "Check consignment compliancy" .-> StreamSoftware.CustomsProduct.ComplianceApp\r
  StreamSoftware.CustomsProduct.ConsignmentApp -. "Declare goods" .-> Customs.System\r
  Customs.System -. "Notify physical control results" .-> StreamSoftware.CustomsProduct.ConsignmentApp\r
  Customs.Officer -. "Manage physical control results" .-> Customs.System\r
  StreamSoftware.CustomsProduct.ConsignmentApp -. "Notify declaration status" .-> Customer.Person\r
  Customer.Person -. "Manage consignments and declare goods" .-> StreamSoftware.CustomsProduct.ConsignmentApp\r
  Customer.Person -. "Verify consignment and declaration compliancy" .-> StreamSoftware.CustomsProduct.ComplianceApp\r
`;case"streamSoftware":return`---\r
title: "Stream Software system landscape"\r
---\r
graph TB\r
  Customs[Customs]\r
  subgraph StreamSoftware["Stream Software"]\r
    StreamSoftware.SupportStaff[fa:fa-user Customer support staff]\r
    StreamSoftware.SupportSystem[Customer support system]\r
    StreamSoftware.CustomsProduct[Customs product]\r
    StreamSoftware.CrossRoads[CrossRoads]\r
    StreamSoftware.LogisticsProduct[Logistics, Finance & Accounting product]\r
  end\r
  subgraph Customer["Customer"]\r
    Customer.Person[fa:fa-user Customer]\r
  end\r
  Customs -. "Notify physical control results" .-> StreamSoftware.CustomsProduct\r
  StreamSoftware.SupportStaff -. "Uses this to follow up on support cases" .-> StreamSoftware.SupportSystem\r
  StreamSoftware.SupportStaff -. "Assist in customer cases" .-> StreamSoftware.CustomsProduct\r
  StreamSoftware.CustomsProduct -. "Declare goods" .-> Customs\r
  StreamSoftware.CustomsProduct -. "Notify declaration status" .-> Customer.Person\r
  Customer.Person -. "Request support" .-> StreamSoftware.SupportStaff\r
  Customer.Person -. "[...]" .-> StreamSoftware.CustomsProduct\r
`;default:throw new Error("Unknown viewId: "+t)}}export{e as d2Source,n as dotSource,r as mmdSource,o as svgSource};
