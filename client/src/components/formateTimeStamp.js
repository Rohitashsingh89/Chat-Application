import moment from 'moment';

export const formatTimestamp = (timestamp) => {
    const now = moment();
    const time = moment(timestamp);
    const diffInMinutes = now.diff(time, 'minutes');

    if (diffInMinutes < 1) {
        if (diffInMinutes < 1) {
            return {
                day: 'just now',
                time: time.format('HH:mm')
            };
        } else if (diffInMinutes < 60) {
            return {
                day: `${diffInMinutes}m ago`,
                time: time.format('HH:mm')
            };
        } else if (diffInMinutes < 1440) {
            return {
                day: `${Math.floor(diffInMinutes / 60)}h ago`,
                time: time.format('HH:mm')
            };
        } else if (diffInMinutes < 43200) {
            return {
                day: `${Math.floor(diffInMinutes / 1440)}d ago`,
                time: time.format('HH:mm')
            };
        } else {
            return {
                day: time.format('MMM D'),
                time: time.format('HH:mm')
            };
        }
    };
};