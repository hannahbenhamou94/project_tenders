//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace tender.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ProducToTender
    {
        public int TenderDetailsID { get; set; }
        public int numProduct { get; set; }
        public int numTender { get; set; }
        public string NameProduct { get; set; }
        public Nullable<int> Amount { get; set; }
        public Nullable<double> PriceLimit { get; set; }
        public Nullable<double> sizeRoomy { get; set; }
    }
}
