import { User } from './User';
import { Company } from "./Company";
import {CustomMap} from "./CustomMap";
//Every class which wants to be part of the map, then they have to implement location object.

const user = new User();
const company = new Company();
const custommap = new CustomMap('map');

custommap.addMarker(user);
custommap.addMarker(company);
