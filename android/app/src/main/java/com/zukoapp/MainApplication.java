package com.zukoapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.lewin.qrcode.QRScanReaderPackage;

import org.reactnative.camera.RNCameraPackage;

import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                //new MainReactPackage(),
                new QRScanReaderPackage(),
                new RNCameraPackage(),
                new RNCWebViewPackage(),
                new FBSDKPackage(mCallbackManager),
                new VectorIconsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
