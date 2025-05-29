import { NativeModules, Platform } from 'react-native';

const BadgeNotification = NativeModules.BadgeNotification;

export function setBadge(count: number) {
    if (Platform.OS === 'android') {
        BadgeNotification?.setBadgeCount?.(count);
    } else if (Platform.OS === 'ios') {
        BadgeNotification?.setBadgeCount?.(count);
    }
}
