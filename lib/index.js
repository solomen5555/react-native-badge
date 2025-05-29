import { NativeModules, Platform } from 'react-native';
const BadgeNotification = NativeModules.BadgeNotification;
export function setBadge(count) {
    var _a, _b;
    if (Platform.OS === 'android') {
        (_a = BadgeNotification === null || BadgeNotification === void 0 ? void 0 : BadgeNotification.setBadgeCount) === null || _a === void 0 ? void 0 : _a.call(BadgeNotification, count);
    }
    else if (Platform.OS === 'ios') {
        (_b = BadgeNotification === null || BadgeNotification === void 0 ? void 0 : BadgeNotification.setBadgeCount) === null || _b === void 0 ? void 0 : _b.call(BadgeNotification, count);
    }
}
