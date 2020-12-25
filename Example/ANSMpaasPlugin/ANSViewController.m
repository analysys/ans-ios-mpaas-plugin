//
//  ANSViewController.m
//  ANSMpaasPlugin
//
//  Created by xiaoxu1234 on 09/14/2020.
//  Copyright (c) 2020 xiaoxu1234. All rights reserved.
//

#import "ANSViewController.h"

@interface ANSViewController ()

@end

@implementation ANSViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    UIButton *openHtmlBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    openHtmlBtn.frame = CGRectMake(30, 100, [UIScreen mainScreen].bounds.size.width - 60, 50);
    [openHtmlBtn addTarget:self action:@selector(openHtml:) forControlEvents:UIControlEventTouchUpInside];
    [openHtmlBtn setTitle:@"打开本地Html" forState:UIControlStateNormal];
    openHtmlBtn.backgroundColor = [UIColor blueColor];
    [self.view addSubview:openHtmlBtn];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)openHtml:(id)sender {
//    NSString *path = [[NSBundle mainBundle].bundlePath stringByAppendingFormat:@"/TestHtml/%@", @"index.html"];
//    path = [NSString stringWithFormat:@"file://%@", path];
//    if ([path length] > 0) {
//        [[MPNebulaAdapterInterface shareInstance] startH5ViewControllerWithParams:@{@"url": path}];
//    }
    
    [[MPNebulaAdapterInterface shareInstance] startH5ViewControllerWithParams:@{@"url": @"http://192.168.220.178/huaxiang/mpaas/index.html"}];
}

@end
