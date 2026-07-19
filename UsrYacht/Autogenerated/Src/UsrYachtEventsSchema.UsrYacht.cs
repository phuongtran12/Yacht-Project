namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1c08ebca-ee53-4d56-beda-28cb0769122c");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("33884e04-a799-4a8c-9bc6-e65e985364c4");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,126,178,33,136,246,117,221,10,75,154,141,66,217,198,236,12,198,216,131,34,95,28,13,91,50,58,57,93,54,250,223,119,146,210,212,117,58,232,129,177,165,251,238,187,251,62,159,145,29,82,47,21,66,133,206,73,178,27,47,22,214,108,116,51,56,233,181,53,231,103,127,207,207,128,99,32,109,26,40,247,228,177,187,26,95,141,11,187,206,154,255,38,29,138,165,241,218,107,164,215,96,196,114,135,198,7,104,2,255,136,137,125,188,189,211,60,134,65,151,151,106,139,157,252,196,42,224,29,100,43,114,223,165,218,122,202,138,159,169,168,31,214,173,86,160,90,73,4,49,247,2,11,188,129,185,36,124,33,147,72,14,14,140,248,236,142,103,214,53,194,206,234,26,62,155,82,238,88,73,110,215,191,80,121,32,52,53,186,25,36,194,57,110,88,86,164,125,239,26,2,44,158,232,70,204,33,214,60,133,56,178,61,210,96,113,245,28,150,120,97,31,228,176,236,60,157,139,132,159,96,107,84,186,147,45,244,78,171,224,81,44,18,31,209,87,251,30,235,133,109,135,206,124,147,237,128,111,15,200,235,60,216,248,37,192,179,105,99,189,129,60,17,93,195,229,69,140,226,57,98,34,40,4,138,91,90,72,163,176,197,154,7,240,110,192,227,63,29,7,121,23,182,129,247,145,100,131,21,118,125,43,125,24,217,224,61,220,89,37,91,253,71,174,91,44,35,46,79,66,86,132,142,247,213,176,237,188,172,226,43,146,29,156,98,140,117,76,50,59,237,18,226,184,39,105,195,178,25,100,39,252,36,162,43,183,84,89,59,215,77,58,101,133,168,236,161,127,241,10,17,60,124,186,16,31,172,235,164,207,39,226,184,241,37,176,137,241,89,149,55,39,134,135,240,91,103,239,163,9,203,223,10,251,160,243,145,103,10,127,120,58,30,62,249,245,240,15,229,158,180,234,228,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("522ab051-a712-90c1-41b1-0d7b21b44567"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("33884e04-a799-4a8c-9bc6-e65e985364c4"),
				CreatedInSchemaUId = new Guid("1c08ebca-ee53-4d56-beda-28cb0769122c"),
				ModifiedInSchemaUId = new Guid("1c08ebca-ee53-4d56-beda-28cb0769122c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1c08ebca-ee53-4d56-beda-28cb0769122c"));
		}

		#endregion

	}

	#endregion

}

