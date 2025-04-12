import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td>
              <Event
                event="Starbucks ☕"
                location="646 Michigan Ave"
                color="green"
              />
            </td>
<<<<<<< HEAD
            <td></td>
            <td></td>
            <td>
              <Event event="Yolk 🍳" location="355 E Ohio St" color="green" />
            </td>
            <td></td>
            <td>
              <Event event="Yolk 🍳" location="355 E Ohio St" color="green" />
            </td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
            <td></td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
            <td></td>
            <td>
              <Event
                event="River Cruise ⛵"
                location="Chicago River"
                color="blue"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="The Bean 🫘"
                location="Millennium Park"
                color="blue"
              />
            </td>
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td>
              <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            </td>
            <td>
              <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            </td>
=======
            <Event
              event="Starbucks ☕"
              location="646 Michigan Ave"
              color="green"
            />
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td></td>
            <td></td>
            <td>
              <Event event="Yolk 🍳" location="355 E Ohio St" color="green" />
            </td>
            <td></td>
            <td>
              <Event event="Yolk 🍳" location="355 E Ohio St" color="green" />
            </td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
            <td></td>
            <td>
              <Event event="Subway 🚇" location="Grand Station" color="pink" />
            </td>
            <td></td>
            <td>
              <Event
                event="River Cruise ⛵"
                location="Chicago River"
                color="blue"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="The Bean 🫘"
                location="Millennium Park"
                color="blue"
              />
            </td>
          </tr>

          <tr>
            <td className="time">10 am</td>
<<<<<<< HEAD
            <td></td>
            <Event
              event="River Cruise ⛵"
              location="Chicago River"
              color="blue"
            />
>>>>>>> 14d751f (Timetable)
=======
            <td>
              <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            </td>
            <td>
              <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            </td>
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td></td>
            <td></td>
            <td></td>
            <td></td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td>
              <Event
                event="The Bean 🫘"
                location="Millennium Park"
                color="blue"
              />
            </td>
<<<<<<< HEAD
          </tr>

=======
            <Event event="The Bean 🫘" location="Millennium Park" color="blue" />
          </tr>
>>>>>>> 14d751f (Timetable)
=======
          </tr>

>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td>
              <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            </td>
            <td>
              <Event
                event="Subway 🚇"
                location="Washington Station"
                color="pink"
              />
            </td>
<<<<<<< HEAD
=======
            <Event event="Deep Dish 🍕" location="Giordano’s" color="green" />
            <td></td>
>>>>>>> 14d751f (Timetable)
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td></td>
            <td></td>
            <td></td>
          </tr>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 14d751f (Timetable)
=======

>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td>
              <Event
                event="Subway 🚇"
                location="Washington Station"
                color="pink"
              />
            </td>
<<<<<<< HEAD
            <td></td>
            <td>
              <Event
                event="Art Institute 🖼️"
                location="111 S Michigan Ave"
                color="blue"
              />
            </td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td>
              <Event
                event="Girl & the Goat 🍽️"
                location="809 W Randolph St"
                color="green"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="Art Institute 🖼️"
                location="111 S Michigan Ave"
                color="blue"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="Subway 🚇"
                location="Roosevelt Station"
                color="pink"
              />
            </td>
            <td>
              <Event
                event="Girl & the Goat 🍽️"
                location="809 W Randolph St"
                color="green"
              />
            </td>
            <td>
              <Event
                event="Fancy Dinner 🎩"
                location="Maple & Ash"
                color="green"
              />
            </td>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td>
              <Event
                event="Cubs Game ⚾"
                location="Wrigley Field"
                color="blue"
              />
            </td>
            <td>
              <Event
                event="Cubs Game ⚾"
                location="Wrigley Field"
                color="blue"
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Event
                event="Subway 🚇"
                location="Roosevelt Station"
                color="pink"
              />
            </td>
            <td>
              <Event
                event="Shopping 🛍️"
                location="Magnificent Mile"
                color="blue"
              />
            </td>
          </tr>

=======
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td></td>
            <td>
              <Event
                event="Art Institute 🖼️"
                location="111 S Michigan Ave"
                color="blue"
              />
            </td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td>
              <Event
                event="Girl & the Goat 🍽️"
                location="809 W Randolph St"
                color="green"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="Art Institute 🖼️"
                location="111 S Michigan Ave"
                color="blue"
              />
            </td>
            <td></td>
            <td>
              <Event
                event="Subway 🚇"
                location="Roosevelt Station"
                color="pink"
              />
            </td>
            <td>
              <Event
                event="Girl & the Goat 🍽️"
                location="809 W Randolph St"
                color="green"
              />
            </td>
            <td>
              <Event
                event="Fancy Dinner 🎩"
                location="Maple & Ash"
                color="green"
              />
            </td>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td>
              <Event
                event="Cubs Game ⚾"
                location="Wrigley Field"
                color="blue"
              />
            </td>
            <td>
              <Event
                event="Cubs Game ⚾"
                location="Wrigley Field"
                color="blue"
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Event
                event="Subway 🚇"
                location="Roosevelt Station"
                color="pink"
              />
            </td>
            <td>
              <Event
                event="Shopping 🛍️"
                location="Magnificent Mile"
                color="blue"
              />
            </td>
          </tr>
<<<<<<< HEAD
>>>>>>> 14d751f (Timetable)
=======

>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
            <td>
              <Event
                event="Shopping 🛍️"
                location="Magnificent Mile"
                color="blue"
              />
            </td>
<<<<<<< HEAD
            <td></td>
=======
            <td></td>
            <Event
              event="Shopping 🛍️"
              location="Magnificent Mile"
              color="blue"
            />
>>>>>>> 14d751f (Timetable)
=======
            <td></td>
>>>>>>> e848d1d (Fix Calendar layout and ensure location displays)
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
