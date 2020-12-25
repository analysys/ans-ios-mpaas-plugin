//
//  MPaaSInterface+ANSMpaasPlugin_Example.m
//  ANSMpaasPlugin_Example
//
//  Created by xiaoxu on 2020/09/14. All rights reserved.
//

#import "MPaaSInterface+ANSMpaasPlugin_Example.h"

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wobjc-protocol-method-implementation"

@implementation MPaaSInterface (ANSMpaasPlugin_Example)

- (BOOL)enableSettingService
{
    return NO;
}

- (NSString *)userId
{
    return nil;
}

@end

#pragma clang diagnostic pop

