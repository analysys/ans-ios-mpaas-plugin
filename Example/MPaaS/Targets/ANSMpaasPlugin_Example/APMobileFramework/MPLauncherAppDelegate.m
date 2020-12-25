//
//  MPLauncherAppDelegate.m

#import "MPLauncherAppDelegate.h"
#import "MPTabBarController.h"
#import "FastExperienceVC.h"
#import "MainModuleVC.h"
@interface MPLauncherAppDelegate ()

@property (nonatomic, strong) UITabBarController* tabBarController;
@property (nonatomic, strong) UIViewController *rootController;

@end

@implementation MPLauncherAppDelegate

- (id)init
{
    self = [super init];
    if (self)
    {
        // 这里指定Tab使用的图片
        NSArray *baseImgs = [NSArray arrayWithObjects:
                             @"TabBar_HomeBar",
                             @"TabBar_Discovery",
                             @"TabBar_PublicService",
                             @"TabBar_Friends", nil];
        NSArray *selectImgs = [NSArray arrayWithObjects:
                               @"TabBar_HomeBar_Sel",
                               @"TabBar_Discovery_Sel",
                               @"TabBar_PublicService_Sel",
                               @"TabBar_Friends_Sel", nil];
        
        UIViewController* tab1ViewController = (UIViewController *) [self createLoggingViewController:@"ANSViewController"];
        UIViewController* tab2ViewController = [[DTViewController alloc] init];
        
        FastExperienceVC *oneVC = [[FastExperienceVC alloc] init];
        UINavigationController *nav1 = [[UINavigationController alloc] initWithRootViewController:oneVC];
        nav1.tabBarItem.title = @"快速体验";
        UIViewController* tab3ViewController = nav1;
        
        MainModuleVC *twoVC = [[MainModuleVC alloc] init];
        UINavigationController *nav2 = [[UINavigationController alloc] initWithRootViewController:twoVC];
        nav2.tabBarItem.title = @"功能详情";
        UIViewController* tab4ViewController = nav2;
        
        NSArray *navArray = @[tab1ViewController, tab2ViewController, tab3ViewController, tab4ViewController];
        NSArray *titles = @[@"Tab1", @"Tab2", @"Tab3", @"Tab4"];
        for (int i = 0; i < [navArray count]; i ++)
        {
            UIImage *bImg = [UIImage imageNamed:baseImgs[i]];
            UIImage *selectImg = [UIImage imageNamed:selectImgs[i]];

            UITabBarItem *item = [[UITabBarItem alloc] initWithTitle:titles[i] image:bImg selectedImage:selectImg];
            item.selectedImage = [item.selectedImage imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
            item.image = [item.image imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
            item.tag = i;
            [(UIViewController *)navArray[i] setTabBarItem:item];
            ((UIViewController *)navArray[i]).title = titles[i];
        }
        
        self.tabBarController = [[MPTabBarController alloc] init];
        self.tabBarController.viewControllers = navArray;
        self.tabBarController.selectedIndex = 0;
        [self.tabBarController.delegate tabBarController:self.tabBarController didSelectViewController:tab1ViewController];
        self.rootController = self.tabBarController;
    }
    return self;
}

- (id)createLoggingViewController:(NSString *)className
{
    id vc;
    Class cl = NSClassFromString(className);
    if (cl != Nil) {
        vc = [[cl alloc]init];
    }
    else {
        vc = (DTViewController *)[[DTViewController alloc] init];
    }
    return vc;
}


- (UIViewController *)rootControllerInApplication:(DTMicroApplication *)application
{
    return self.rootController;
}

- (void)applicationDidFinishLaunching:(DTMicroApplication *)application
{

}

- (void)application:(DTMicroApplication *)application willResumeWithOptions:(NSDictionary *)launchOptions
{

}

@end
