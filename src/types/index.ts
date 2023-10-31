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

export interface Landlord {
  id: number
  bussniess_id: number
  full_name: string
  email: string
  number: string
  identity: string
  image: string
  address: string
  occupation: string
  account: string
  created_at: string
  updated_at: string
  leads_id: any
  image_url: string
}

export interface Tenant {
  id: number
  full_name: string
  email: string
  number: string
  identity: string
  image: string
  address: string
  occupation: string
  place: string
  emrgency_name: any
  emrgency_number: any
  name: string
  phone: string
  created_at: string
  updated_at: string
  bussniess_id: number
  leads_id: any
  image_url: string
}

export interface Source {
  id: number
  source: string
  bussniess_id: number
  created_at: string
  updated_at: string
}

export interface Installment {
  id: number;
  bussniess_id: number;
  rent_leases_id: number;
  due_date: string;
  status: string;
  monthly: string;
  payment: string;
  rem_payment: string;
  paid_rent_payment: string;
  update_payment_status: string;
  created_at: string;
  updated_at: string;
}

export interface PropertyType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface PropertyUnit {
  id: number
  title: string
  description: string
  image: any
  created_at: string
  updated_at: string
  property_id: number
  bussniess_id: number
  image_url: string
  property_details: PropertyDetails
}

export interface PropertyDetails {
  id: number
  name: string
  rent: string
  propertytype_id: number
  landlord_id: number
  area: string
  agency: string
  deposit: string
  description: string
  property_status: number
  bussniess_id: number
  created_at: string
  updated_at: string
  rent_sale: string
  location: Location
  amenities: Amenities
  property_images: PropertyImages
}

export interface Location {
  id: number
  property_id: number
  search: string
  address: string
  city: string
  state: string
  post: string
  created_at: string
  updated_at: string
}

export interface Amenities {
  id: number
  property_id: number
  propertynote: string
  age: string
  room: string
  bedroom: any
  bathroom: any
  animities: string
  created_at: string
  updated_at: string
}

export interface PropertyImages {
  id: number
  property_id: number
  propertyimage: string
  created_at: string
  updated_at: string
  image_url: string
}
export interface PropertyList {
  id: number
  name: string
  rent: string
  propertytype_id: number
  landlord_id: number
  area: string
  agency: string
  deposit: string
  description: string
  property_status: number
  bussniess_id: number
  created_at: string
  updated_at: string
  rent_sale: string
  amenities: Amenities
  property_images: PropertyImages
  location: Location
  propertytype: Propertytype
  landlord: Landlord
}
export interface Propertytype {
  id: number
  type: string
  description: any
  bussniess_id: number
  created_at: string
  updated_at: string
}

export interface PropertyInventory {
  id: number
  property_id: number
  propertyunit_id: number
  description: string
  unit: string
  image: any
  bussniess_id: number
  created_at: string
  updated_at: string
  image_url: string
  property_details: PropertyDetails
  property_units: PropertyUnits
}
export interface PropertyUnits {
  id: number
  title: string
  description: string
  image: any
  created_at: string
  updated_at: string
  property_id: number
  bussniess_id: number
  image_url: string
  property_details: PropertyDetails2
}
export interface PropertyDetails2 {
  id: number
  name: string
  rent: string
  propertytype_id: number
  landlord_id: number
  area: string
  agency: string
  deposit: string
  description: string
  property_status: number
  bussniess_id: number
  created_at: string
  updated_at: string
  rent_sale: string
  location: Location
  amenities: Amenities
  property_images: PropertyImages
}
