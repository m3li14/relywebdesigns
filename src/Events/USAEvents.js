import React from 'react';
import Christmas from '../Images/Christmas.svg';
import July4th from '../Images/4thJuly.svg';
import newYear from '../Images/newYear.svg';
import Thanksgiving from '../Images/Thanksgiving.svg'
import MotherDay from '../Images/MotherDay.svg'


const USAEvents = ({ date = new Date() }) => {
    let message = '';
    let image = '';

    const today = new Date();

    const getMessageAndImage = () => {
        const month = date.getMonth();
        const day = date.getDate();



        if (month === 0 && day === 1) {
            // New Year's Day
            message = 'Happy New Year';
            image = newYear;
        } else if (month === 6 && day === 4) {
            // Independence Day
            message = 'Happy 4th of July';
            image = July4th;
        } else if (month === 10 && day === getThanksgivingDay(date.getFullYear())) {
            // Thanksgiving Day
            message = 'Happy Thanksgiving';
            image = Thanksgiving;
        } else if (month === 11 && day === 25) {
            // Christmas Day
            message = 'Merry Christmas';
            image = Christmas;
        } else if (
            month === 4 &&
            getSecondSunday(date.getFullYear()).getMonth() === month &&
            getSecondSunday(date.getFullYear()).getDate() === day
        ) {
            // Mother's Day
            message = "Happy Mother's Day";
            image = MotherDay;
        }
    };

    const getThanksgivingDay = (year) => {
        const firstNovember = new Date(year, 10, 1);
        const firstThursday = new Date(
            firstNovember.getFullYear(),
            firstNovember.getMonth(),
            1
        );

        const dayOffset = (11 - firstThursday.getDay()) % 7;
        const thanksgivingDay = firstThursday.getDate() + dayOffset + 21;

        return thanksgivingDay;
    };

    const getSecondSunday = (year) => {
        const firstMay = new Date(year, 4, 1);
        const firstSunday = new Date(
            firstMay.getFullYear(),
            firstMay.getMonth(),
            1
        );

        const dayOffset = (7 - firstSunday.getDay()) % 7;
        const secondSunday = firstSunday.getDate() + dayOffset + 7;

        return new Date(year, 4, secondSunday);
    };

    getMessageAndImage();

    if (!message || !image) {
        return null;
    }

    return (

        <div className='mx-auto'>
            <div>

                <div>
                    <div>
                        <div className='pt-5'><img src={image} alt='' title='' className='h-36 mx-auto' /></div>

                        <div className='text-2xl text-[#C13E39] custom-font font-bold text-center'>{message}</div>
                        <div className='text-3xl text-[#1B3E5D] custom-font font-bold text-center'>{today.getFullYear()}</div>
                    </div>

                </div>



            </div>

        </div>



    );
};

export default USAEvents;