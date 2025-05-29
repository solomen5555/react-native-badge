import { NativeModules, Platform } from 'react-native';

const BadgeNotification = NativeModules.BadgeNotification;

export function setBadge(count: number) {
    console.log('setBadge called, count =', count);

    if (!BadgeNotification?.setBadgeCount) {
        console.warn('BadgeNotification.setBadgeCount is undefined');
        return;
    }

    if (Platform.OS === 'android' || Platform.OS === 'ios') {
        BadgeNotification.setBadgeCount(count);
    } else {
        console.warn('Unsupported platform:', Platform.OS);
    }
}
