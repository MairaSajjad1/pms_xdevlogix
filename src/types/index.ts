export interface Lease {
  id: number;
  bussniess_id: number;
  property_id: number;
  propertyunit_id: number;
  rent: string;
  get_dmy: string;
  advance_payments: string;
  tenant_id: number;
  new_teanants_id: string;
  lease_start: string;
  lease_end: string;
  due_date: string;
  frequency_collection: string;
  total_payment: string;
  paid_payment: string;
  image: any;
  terms: any;
  created_at: string;
  updated_at: string;
  full_name: string;
  title: string;
  name: string;
  remaining_amount: number;
  image_url: string;
}
