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
					]
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
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
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
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
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
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});