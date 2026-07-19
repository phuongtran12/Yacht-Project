define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "e3ca1f71-f426-4d66-9e91-8708dea4d4ea",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_do05m9n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_do05m9n_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunAvgTicketPriceProcess",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgTicketPriceProcess_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					},
					"icon": "send-test-email-icon"
				},
				"parentName": "Button_do05m9n",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunMaxPriceWebServiceRequest"
					},
					"icon": "rocket-icon"
				},
				"parentName": "Button_do05m9n",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_qk9gust",
					"control": "$PDS_UsrPrice_qk9gust",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_6p1bcko",
					"control": "$PDS_UsrTicketPrice_6p1bcko",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_tyges5y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_0h1svas",
					"control": "$PDS_UsrLength_0h1svas",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrYachtDriveType_s7brzml",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrYachtDriveType_s7brzml",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_x6hvih3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_x6hvih3",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_fhf70tg",
					"control": "$PDS_UsrPassengersCount_fhf70tg",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_28g5gkz",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_28g5gkz",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_vj13x7m",
					"control": "$PDS_UsrComment_vj13x7m",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"required": "$UsrIsCommentRequired"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_wjxhhb3",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_o0u6h9l",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_o0u6h9l",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_2jkheh6",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn14_do3rtpe",
					"control": "$PDS_UsrColumn14_do3rtpe",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NumberInput_gczyzfv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_lfq5reo",
					"control": "$PDS_UsrCrewCount_lfq5reo",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_c4qd802",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_c4qd802",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ComboBox_d3bknus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_gh62th2",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_gh62th2"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "addRecord_wamwh08",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wamwh08_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d3bknus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Category_MultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Category_MultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoryStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_thbr70o",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_thbr70o_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_nevpxoz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_thbr70o",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yun0kkf",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_nevpxoz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_qmggmw2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qmggmw2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_yun0kkf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_93wf2vl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_93wf2vl_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_2tcuw3fDS"
						}
					}
				},
				"parentName": "FlexContainer_yun0kkf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_5oxoo1u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_5oxoo1u_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_yun0kkf",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2ykja8f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2ykja8f_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_2tcuw3f"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5oxoo1u",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_a3q0c34",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_a3q0c34_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5oxoo1u",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_9b1cxo5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_9b1cxo5_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_9b1cxo5_GridDetail_2tcuw3f",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_2tcuw3f"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_9b1cxo5_SearchValue",
							"GridDetailSearchFilter_9b1cxo5_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_yun0kkf",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_briopx7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_thbr70o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2tcuw3f",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_2tcuw3f",
					"primaryColumnName": "GridDetail_2tcuw3fDS_Id",
					"columns": [
						{
							"id": "6da052b5-ffec-e5ee-2e5b-dd512102c848",
							"code": "GridDetail_2tcuw3fDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_UsrStartDate)#",
							"dataValueType": 8
						},
						{
							"id": "16a903d3-2e83-f717-0810-7d9a5f16169e",
							"code": "GridDetail_2tcuw3fDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_UsrEndDate)#",
							"dataValueType": 8
						},
						{
							"id": "a96a054f-6c1f-684a-db28-e0247e0a14e6",
							"code": "GridDetail_2tcuw3fDS_UsrComment",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "7c773de7-ce6d-529b-fdd7-a43bb1e3858f",
							"code": "GridDetail_2tcuw3fDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "0edeff84-ea36-43df-a3a3-35ba493f5fb0",
							"code": "GridDetail_2tcuw3fDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "5f319260-5d0f-9b21-a88a-aadb8afdf206",
							"code": "GridDetail_2tcuw3fDS_UsrParentYacht",
							"caption": "#ResourceString(GridDetail_2tcuw3fDS_UsrParentYacht)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_briopx7",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_qk9gust": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 301,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrStatus_x6hvih3": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_x6hvih3_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPassengersCount_fhf70tg": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 3,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_28g5gkz": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_28g5gkz_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_vj13x7m": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"UsrIsCommentRequired": {
						"value": false
					},
					"PDS_UsrDeviceType_8ra8mp6": {
						"modelConfig": {
							"path": "PDS.UsrDeviceType"
						}
					},
					"PDS_UsrColumn14_do3rtpe": {
						"modelConfig": {
							"path": "PDS.UsrColumn14"
						}
					},
					"PDS_UsrCountry_o0u6h9l": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_o0u6h9l_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCity_c4qd802": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_c4qd802_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrTicketPrice_6p1bcko": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_wjxhhb3": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_wjxhhb3"
						}
					},
					"GridDetail_2tcuw3f": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2tcuw3fDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_9b1cxo5_GridDetail_2tcuw3f",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2tcuw3fDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.UsrStartDate"
									}
								},
								"GridDetail_2tcuw3fDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.UsrEndDate"
									}
								},
								"GridDetail_2tcuw3fDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.UsrComment"
									}
								},
								"GridDetail_2tcuw3fDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.CreatedOn"
									}
								},
								"GridDetail_2tcuw3fDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.UsrCustomer"
									}
								},
								"GridDetail_2tcuw3fDS_UsrParentYacht": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.UsrParentYacht"
									}
								},
								"GridDetail_2tcuw3fDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2tcuw3fDS.Id"
									}
								}
							}
						}
					},
					"Category_MultiSelect_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrYachtDriveType_s7brzml": {
						"modelConfig": {
							"path": "PDS.UsrYachtDriveType"
						}
					},
					"PDS_UsrYachtDriveType_s7brzml_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrLength_0h1svas": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrCrewCount_lfq5reo": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrCaptain_gh62th2": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_gh62th2_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_2tcuw3fDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrManagerEmail_wjxhhb3": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_2tcuw3fDS": {
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
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrParentYacht": {
									"path": "UsrParentYacht"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
    {
        request: "crt.HandleViewModelInitRequest",
        handler: async (request, next) => {
            await next.handle(request);
            try {
                const minPrice = await Terrasoft.SysSettings.querySysSettingsValue("MinPriceToRequireYachtComment");
                request.$context.UsrMinPriceForComment = minPrice || 8000;
                
                const price = await request.$context.PDS_UsrPrice_qk9gust;
                request.$context.UsrIsCommentRequired = (price >= request.$context.UsrMinPriceForComment);

                // Tự động điền Manager bằng Current User Contact khi thêm mới (CardState = "add" hoặc "copy")
                const cardState = await request.$context.CardState;
                if (cardState === "add" || cardState === "copy") {
                    const sysValuesService = new sdk.SysValuesService();
                    const sysValues = await sysValuesService.loadSysValues();
                    const currentUserContact = sysValues.userContact;
                    if (currentUserContact) {
                        request.$context.PDS_UsrManager_28g5gkz = currentUserContact;
                    }
                }
            } catch (e) {
                request.$context.UsrMinPriceForComment = 8000;
            }
        }
    },
    {
        request: "usr.PushButtonRequest",
        
        handler: async (request, next) => {
            console.log("Button works...");
            Terrasoft.showInformation("My button was pressed.");
            var price = await request.$context.PDS_UsrPrice_qk9gust;
            console.log("Price = " + price);
            request.$context.PDS_UsrComment_vj13x7m = "comment from JS code!";
         
            return next?.handle(request);
        }
    },
			{
    request: "crt.HandleViewModelAttributeChangeRequest",
  
    handler: async (request, next) => {
        if (request.attributeName === 'PDS_UsrPrice_qk9gust' ||           
            request.attributeName === 'PDS_UsrPassengersCount_fhf70tg' ) {  
            let price = await request.$context.PDS_UsrPrice_qk9gust;
            let passengers = await request.$context.PDS_UsrPassengersCount_fhf70tg;
            let ticket_price = 0;
            if (passengers) {
				 ticket_price = price / passengers;
            }
            request.$context.PDS_UsrTicketPrice_6p1bcko = ticket_price;
        }

        if (request.attributeName === 'PDS_UsrPrice_qk9gust') {
            const price = await request.$context.PDS_UsrPrice_qk9gust;
            const minPriceLimit = request.$context.UsrMinPriceForComment || 8000;
            request.$context.UsrIsCommentRequired = (price >= minPriceLimit);
        }

     
        return next?.handle(request);
    }
},
{
    request: "crt.SaveRecordRequest",
    handler: async (request, next) => {
        const price = await request.$context.PDS_UsrPrice_qk9gust;
        const passengers = await request.$context.PDS_UsrPassengersCount_fhf70tg;
        const comment = await request.$context.PDS_UsrComment_vj13x7m;
        const minPriceLimit = request.$context.UsrMinPriceForComment || 8000;

        if (price <= 300) {
            request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        message: "Price per day, EUR must be greater than 300.",
                        actions: [{
                            key: "OK",
                            config: {
                                color: "primary",
                                caption: "OK"
                            }
                        }]
                    }
                }
            });
            return false;
        }

        if (passengers <= 2) {
            request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        message: "Passengers count must be greater than 2.",
                        actions: [{
                            key: "OK",
                            config: {
                                color: "primary",
                                caption: "OK"
                            }
                        }]
                    }
                }
            });
            return false;
        }

        if (price >= minPriceLimit && (!comment || comment.trim() === "")) {
            request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        message: `Comment is required because Price per day is greater than or equal to ${minPriceLimit} EUR.`,
                        actions: [{
                            key: "OK",
                            config: {
                                color: "primary",
                                caption: "OK"
                            }
                        }]
                    }
                }
            });
            return false;
        }

        return next.handle(request);
    }
},
{
    request: "usr.RunMaxPriceWebServiceRequest",
    /* Implementation of the custom query handler. */
    handler: async (request, next) => {
        console.log("Run web service button works...");

        // get id from drive type lookup type object
        var typeObject = await request.$context.PDS_UsrDeviceType_8ra8mp6;
        var selectedDriveTypeId = "";
        if (typeObject) {
            selectedDriveTypeId = typeObject.value;
        }
        /* Create an instance of the HTTP client from @creatio-devkit/common. */
        const httpClientService = new sdk.HttpClientService();

        /* Specify the URL to run web service method. */
        const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
        const transferName = "rest";
        const serviceName = "YachtService";
        const methodName = "GetMaxPriceByDriveTypeId";
        const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

        //const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";
        /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
        var params = {
            driveTypeId: selectedDriveTypeId
        };
        const response = await httpClientService.post(endpoint, params);

        console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);

        /* Call the next handler if it exists and return its result. */
        return next?.handle(request);
    }
}
			
]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
    /* The validator type must contain a vendor prefix.
       Format the validator type in PascalCase. */
    "usr.DGValidator": {
        validator: function (config) {
            return function (control) {
                let value = control.value;
                let minValue = config.minValue;
                let valueIsCorrect = value >= minValue;
                var result;
                if (valueIsCorrect) {
                    result = null;
                } else {
                    result = {
                        "usr.DGValidator": {
                            message: config.message
                        }
                    };
                }
                return result;
            };
        },
        params: [
            {
                name: "minValue"
            },
            {
                name: "message"
            }
        ],
        async: false
    }
}/**SCHEMA_VALIDATORS*/
	};
});
sửa trong đây, đặt log hết cho t 
</```
_MODEL_STUDIO_
[PDS]
[GridDetail_2tcuw3fDS]
[GridDetail_2tcuw3f]
[PDS_UsrPrice_qk9gust]
[PDS_UsrStatus_x6hvih3]
[PDS_UsrPassengersCount_fhf70tg]
[PDS_UsrManager_28g5gkz]
[PDS_UsrComment_vj13x7m]
[PDS_UsrDeviceType_8ra8mp6]
[PDS_UsrColumn14_do3rtpe]
[PDS_UsrCountry_o0u6h9l]
[PDS_UsrCity_c4qd802]
[PDS_UsrTicketPrice_6p1bcko]
[PDS_UsrManagerEmail_wjxhhb3]
[PDS_UsrYachtDriveType_s7brzml]
[PDS_UsrLength_0h1svas]
[PDS_UsrCrewCount_lfq5reo]
[PDS_UsrCaptain_gh62th2]
[UsrName]
[UsrIsCommentRequired]
[Category_MultiSelect_List_Items_Predefined_Filter]
[PDS_UsrStatus_x6hvih3_List]
[PDS_UsrManager_28g5gkz_List]
[PDS_UsrCountry_o0u6h9l_List]
[PDS_UsrCity_c4qd802_List]
[PDS_UsrYachtDriveType_s7brzml_List]
[PDS_UsrCaptain_gh62th2_List]
[GridDetail_2tcuw3fDS_UsrStartDate]
[GridDetail_2tcuw3fDS_UsrEndDate]
[GridDetail_2tcuw3fDS_UsrComment]
[GridDetail_2tcuw3fDS_CreatedOn]
[GridDetail_2tcuw3fDS_UsrCustomer]
[GridDetail_2tcuw3fDS_UsrParentYacht]
[GridDetail_2tcuw3fDS_Id]
[GridDetailSearchFilter_9b1cxo5_GridDetail_2tcuw3f]
[GridDetailSearchFilter_9b1cxo5_SearchValue]
[GridDetailSearchFilter_9b1cxo5_FilteredColumnsGroups]
[Id]
[Tabs]
[GeneralInfoTabContainer]
[Feed]
[AttachmentList]
[Button_do05m9n]
[RunWebServiceMenuItem]
[PushMeButton]
[Price]
[TicketPrice]
[NumberInput_tyges5y]
[DriveType]
[Status]
[PassengersCount]
[Manager]
[Comment]
[ManagerEmail]
[Country]
[Input_2jkheh6]
[NumberInput_gczyzfv]
[City]
[ComboBox_d3bknus]
[addRecord_wamwh08]
[Category_MultiSelect]
[ExpansionPanel_thbr70o]
[GridContainer_nevpxoz]
[FlexContainer_yun0kkf]
[GridDetailAddBtn_qmggmw2]
[GridDetailRefreshBtn_93wf2vl]
[GridDetailSettingsBtn_5oxoo1u]
[GridDetailExportDataBtn_2ykja8f]
[GridDetailImportDataBtn_a3q0c34]
[GridDetailSearchFilter_9b1cxo5]
[GridContainer_briopx7]
[RunAvgTicketPriceProcess]
[UsrName_label]
[Price_label]
[TicketPrice_label]
[NumberInput_tyges5y_label]
[DriveType_label]
[Status_label]
[PassengersCount_label]
[Manager_label]
[Comment_label]
[ManagerEmail_label]
[Country_label]
[Input_2jkheh6_label]
[NumberInput_gczyzfv_label]
[City_label]
[ComboBox_d3bknus_label]
[addRecord_wamwh08_caption]
[Category_MultiSelect_label]
[ExpansionPanel_thbr70o_title]
[GridDetailAddBtn_qmggmw2_caption]
[GridDetailRefreshBtn_93wf2vl_caption]
[GridDetailSettingsBtn_5oxoo1u_caption]
[GridDetailExportDataBtn_2ykja8f_caption]
[GridDetailImportDataBtn_a3q0c34_caption]
[GridDetailSearchFilter_9b1cxo5_placeholder]
[PriceCannotBeLess]
[PassengersCountCannotBeLess]
[RunAvgTicketPriceProcess_caption]
[RunWebServiceMenuItem_caption]
[PushMeButton_caption]
[Button_do05m9n_caption]
[GridDetail_2tcuw3fDS_UsrStartDate]
[GridDetail_2tcuw3fDS_UsrEndDate]
[GridDetail_2tcuw3fDS_UsrComment]
[GridDetail_2tcuw3fDS_CreatedOn]
[GridDetail_2tcuw3fDS_UsrCustomer]
[GridDetail_2tcuw3fDS_UsrParentYacht]
[AttachmentListDS_Name]
[GridDetail_2tcuw3f]
[Yachts form page (Business rules)]
[UsrYachts_FormPageBusinessRule]
[AddonSchemaManager]
[89e77863-0ffe-4a32-a8dc-b68407605034]
[83864fdb-c81a-404b-9a50-2acb49d93c3f]
[46714ec0-b7d1-4419-8a07-907feee2d3b9]
[UsrYacht]
[3a2d6f51-1bfc-4c17-aacb-b53de4866b7c]
[00000000-0000-0000-0000-000000000000]
[SaveSchemaCommand]
[SaveSchema]
[SaveDesignItemInternal]
[SaveDesignItem]
[SyncInvokeSaveSchema]
[Invoke]
[ProcessMessage5]
[ProcessMessage11]
[Process]
[DispatchAndReleasePump]
[HandleRequest]
[AsyncMessagePump]
[OnAsyncReceiveComplete]
[UnhandledExceptionFrame]
[Complete]
[Set]
[EnqueueAndDispatch]
[Enqueue]
[CompleteParseAndEnqueue]
[HandleParseIncomingMessage]
[SyncContinue]
[BeginProcessInboundRequest]
[ProcessHttpContextAsync]
[BeginHttpContextReceived]
[HttpContextReceived]
[HandleRequest]
[BeginRequest]
[OnBeginRequest]
[PartialTrustInvoke]
[OnBeginRequestWithFlow]
[IOCallback]
[UnhandledExceptionFrame]
[PerformIOCompletionCallback]
[SaveSchemaItem]
[InternalSaveSchemaInDb]
[InternalSaveSchemaInDB]
[InternalSaveSchema]
[SaveDesignItemInternal]
[SaveSchemaCommand]
[SaveDesignItem]
[SyncInvokeSaveSchema]
[Invoke]
[ProcessMessage5]
[ProcessMessage11]
[Process]
[DispatchAndReleasePump]
[HandleRequest]
[AsyncMessagePump]
[OnAsyncReceiveComplete]
[UnhandledExceptionFrame]
[Complete]
[Set]
[EnqueueAndDispatch]
[Enqueue]
[CompleteParseAndEnqueue]
[HandleParseIncomingMessage]
[SyncContinue]
[BeginProcessInboundRequest]
[ProcessHttpContextAsync]
[BeginHttpContextReceived]
[HttpContextReceived]
[HandleRequest]
[BeginRequest]
[OnBeginRequest]
[PartialTrustInvoke]
[OnBeginRequestWithFlow]
[IOCallback]
[UnhandledExceptionFrame]
[PerformIOCompletionCallback]
[UsrColumn9]
[UsrYachts]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[UsrDeviceType]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
[AddColumn]
[AddQueryColumn]
[AddQueryColumns]
[GetSchemaColumnByPath]
[CreateColumn]
...