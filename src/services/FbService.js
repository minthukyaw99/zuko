import React from 'react'
import FBSDK from 'react-native-fbsdk'

const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class FacebookService {
    constructor() {
        this.requestManager = new GraphRequestManager()
    }

    makeLoginButton(callback) {
        return (
            <LoginButton
                readPermissions={["public_profile, email"]}
                onLoginFinished={(error, result) => {
                    if (error) {
                        console.log('---- facebook login error ----');
                    } else if (result.isCancelled) {
                        console.log('------- facebook login is cancelled --------');
                    } else {
                        AccessToken.getCurrentAccessToken()
                            .then((data) => {
                                callback(data.accessToken)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
                }}
            />
        )
    }

    makeLogoutButton(callback) {
        return (
            <LoginButton onLogoutFinished={() => {
                callback()
            }}
            />
        )
    }

    async getAccessToken() {
        return await AccessToken.getCurrentAccessToken();
    }

    async fetchUserData(callback) {
        const { accessToken } = await this.getAccessToken();
        return new Promise((resolve, reject) => {
            const request = new GraphRequest(
                '/me',
                null,
                (error, result) => {
                    if (result) {
                        console.log('Zuko-------- facebook login request result ------- ' + JSON.stringify(result));
                        const profile = result;
                        profile.avatar = `https://graph.facebook.com/${result.id}/picture`;
                        profile.email = `https://graph.facebook.com/${result.id}?fields=email&access_token=${accessToken}`;
                        resolve(profile)
                    } else {
                        reject(error)
                    }
                }
            );

            this.requestManager.addRequest(request).start()
        })
    }
}

export const facebookService = new FacebookService();