import {Calendar} from "ion-datetime-picker";
import FixedCalendar from "ion-datetime-picker-calendar-fixed/src/calendar";

export default class AsgardiaCalendar extends FixedCalendar implements Calendar {
  public months = ["January", "February", "March", "April", "May", "June", "Asgard", "July", "August", "September", "October", "November", "December"];
}
