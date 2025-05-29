#import "BadgeNotification.h"
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@implementation BadgeNotification

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setBadgeCount:(NSInteger)count)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [UIApplication sharedApplication].applicationIconBadgeNumber = count;
    RCTLogInfo(@"Badge count set to %ld", (long)count);
  });
}

@end
