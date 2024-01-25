import calendar
import json


def french_day(day):
    f_days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    en_days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    for en_day in en_days:
        if day == en_day:
            index = en_days.index(en_day)
            return f_days[index]


def french_months(month):
    f_months = [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
    ]
    en_months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    for en_month in en_months:
        if month == en_month:
            index = en_months.index(en_month)
            return f_months[index]


def gen_calendar_json(year):
    calendar_json = []

    for months in range(1, 13):
        month_table = [
            french_months(calendar.month_name[months]),
            calendar.month_name[months],
        ]
        day_of_month = calendar.monthcalendar(year, months)

        for week in day_of_month:
            for day in week:
                if day != 0:
                    f_day = french_day(
                        calendar.day_name[calendar.weekday(year, months, day)]
                    )
                    calendar_json.append(
                        {
                            "day": [
                                str(day),
                                f_day,
                                calendar.day_name[calendar.weekday(year, months, day)],
                            ],
                            "months": month_table,
                        }
                    )

    return calendar_json


calendar_raw = gen_calendar_json(2024)

for i in range(len(calendar_raw)):
    if calendar_raw[i]["day"][2] == "Saturday":
        if i + 1 < len(calendar_raw):
            calendar_raw[i]["day_"] = calendar_raw[i + 1]["day"]

calendar_clean = []
for i in range(len(calendar_raw)):
    if calendar_raw[i]["day"][2] != "Sunday":
        calendar_clean.append(calendar_raw[i])
calendar_json_string = json.dumps(calendar_clean, indent=2)

with open("calendar_2024.json", "w") as file:
    file.write(calendar_json_string)
