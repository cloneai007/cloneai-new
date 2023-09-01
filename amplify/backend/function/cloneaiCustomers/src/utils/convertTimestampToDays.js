const convertTimestampToDays = (timestamp) => {
    const currentDate = new Date();
    const targetDate = new Date(timestamp * 1000);

    // Calculate the time difference in milliseconds
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert the time difference to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
};

module.exports = convertTimestampToDays;
