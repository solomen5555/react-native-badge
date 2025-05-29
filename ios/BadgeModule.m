#import "BadgeModule.h"
#import <UIKit/UIKit.h>

@implementation BadgeModule

RCT_EXPORT_MODULE(BadgeNotification);

RCT_EXPORT_METHOD(setBadgeCount:(NSInteger)count)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [UIApplication sharedApplication].applicationIconBadgeNumber = count;
  });
}

@end
