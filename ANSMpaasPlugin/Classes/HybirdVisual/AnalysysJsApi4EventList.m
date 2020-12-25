//
//  AnalysysJsApi4EventList.m
//  MpassDemo
//
//  Created by 少冲 on 2020/9/10.
//  Copyright © 2020 Analysys. All rights reserved.
//

#import "AnalysysJsApi4EventList.h"

@implementation AnalysysJsApi4EventList
/**
 * 接收js回调的Hybrid模式Event事件
 */
-(void)handler:(NSDictionary *)data context:(PSDContext *)context callback:(PSDJsApiResponseCallbackBlock)callback {
    [super handler:data context:context callback:callback];
    
    WKWebView *webView = (WKWebView *)context.currentViewControllerProxy.psdContentView;
    
    //  获取事件列表
    if ([webView isKindOfClass:NSClassFromString(@"WKWebView")]) {
        Class visualHybrid = NSClassFromString(@"ANSVisualHybrid");
        SEL analysysAgentGetEventList = NSSelectorFromString(@"analysysAgentGetEventList:");
        if ([visualHybrid respondsToSelector:analysysAgentGetEventList]) {
            [visualHybrid performSelector:analysysAgentGetEventList withObject:webView];
        }
        callback(@{@"resulut": @"success"});
    } else {
        callback(@{@"resulut": @"failure"});
    }
    
}

@end
