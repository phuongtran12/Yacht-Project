define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "dbfa7f50-5b8a-dbc5-3373-b097fcae66b6",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32
						},
						{
							"id": "f8c5b62b-1841-d811-da83-44c4ca5f69ae",
							"code": "PDS_UsrPassengersCount",
							"caption": "#ResourceString(PDS_UsrPassengersCount)#",
							"dataValueType": 4
						},
						{
							"id": "c831d4c6-2f9c-5d0a-f3aa-892bb7a25ca2",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "60670974-a08d-d86a-3ba6-0da28533d86f",
							"code": "PDS_UsrColumn9",
							"caption": "#ResourceString(PDS_UsrColumn9)#",
							"dataValueType": 10
						},
						{
							"id": "e4b7e06b-9579-1d4f-e8e2-f2749ee1c808",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"activeRow": "$DataTable_ActiveRow",
					"_filterOptions": {
						"from": [
							"Items",
							"DataTable_ActiveRow"
						],
						"expose": [
							{
								"attribute": "DataTable_8f41414b_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"Items",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"UsrParentYacht"
										]
									}
								]
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "Label_ruflfc4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ruflfc4_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_5h124v9",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5h124v9_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_gqko7mr",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_gqko7mr",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_gqko7mrDS_Id",
					"columns": [
						{
							"id": "1846d8a3-f056-ff47-1736-a55943130177",
							"code": "DataGrid_gqko7mrDS_UsrStartDate",
							"caption": "#ResourceString(DataGrid_gqko7mrDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 220
						},
						{
							"id": "b8986c0b-e090-40c3-30d4-fb01ca73a2ed",
							"code": "DataGrid_gqko7mrDS_UsrEndDate",
							"caption": "#ResourceString(DataGrid_gqko7mrDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 250
						},
						{
							"id": "68f833b3-afb6-1f72-d304-eed434c47a43",
							"code": "DataGrid_gqko7mrDS_UsrComment",
							"caption": "#ResourceString(DataGrid_gqko7mrDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "524f2eaa-e9ce-20df-766f-b253a594bb5e",
							"code": "DataGrid_gqko7mrDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_gqko7mrDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_gqko7mr": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_gqko7mrDS",
							"filterAttributes": [
								{
									"name": "DataTable_8f41414b_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_gqko7mrDS_UsrStartDate": {
									"modelConfig": {
										"path": "DataGrid_gqko7mrDS.UsrStartDate"
									}
								},
								"DataGrid_gqko7mrDS_UsrEndDate": {
									"modelConfig": {
										"path": "DataGrid_gqko7mrDS.UsrEndDate"
									}
								},
								"DataGrid_gqko7mrDS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_gqko7mrDS.UsrComment"
									}
								},
								"DataGrid_gqko7mrDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_gqko7mrDS.CreatedOn"
									}
								},
								"DataGrid_gqko7mrDS_Id": {
									"modelConfig": {
										"path": "DataGrid_gqko7mrDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrPassengersCount": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrColumn9": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_gqko7mrDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrPassengersCount": {
							"path": "UsrPassengersCount"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrColumn9": {
							"path": "UsrColumn9"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_gqko7mrDS": [
						{
							"attributePath": "UsrParentYacht",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});