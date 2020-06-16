import React, { ChangeEvent } from "react";
import * as styles from "./SettingsComponent.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

export interface SettingsComponentProps {}

export const SettingsComponent: React.FC<SettingsComponentProps> = (props) => {
    const theme = useSelector((state: AppState) => state.system.theme);

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        // dark mode
    }
    // To watch for changes:

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
            const newColorScheme = e.matches ? "dark" : "light";
            console.log(
                `You can set new color scheme here, it's ${newColorScheme}`,
            );
        });

    const timeFormat = useSelector(
        (state: AppState) => state.system.timeFormat,
    );
    const sendOnCtrlEnter = useSelector(
        (state: AppState) => state.system.sendOnCtrlEnter,
    );
    const onValueChange = (e: ChangeEvent<HTMLElement>) => {
        console.log(e.target);
    };
    return (
        <div className={styles.settings}>
            Settings
            <div>
                <label>
                    User name
                    <input type="text" />
                </label>
            </div>
            <div>
                Theme
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Light"
                            name="theme"
                            checked={theme === "Light"}
                            onChange={onValueChange}
                        />
                        Light
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Dark"
                            name="theme"
                            checked={theme === "Dark"}
                            onChange={onValueChange}
                        />
                        Dark
                    </label>
                </div>
            </div>
            <div>
                Time format
                <div>
                    <label>
                        <input
                            type="radio"
                            value="12"
                            name="timeFormat"
                            checked={timeFormat === "12"}
                            onChange={onValueChange}
                        />
                        12 Hours
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="24"
                            name="timeFormat"
                            checked={timeFormat === "24"}
                            onChange={onValueChange}
                        />
                        24 Hours
                    </label>
                </div>
            </div>
            <div>
                Send messages on CTRL+ENTER
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Light"
                            name="theme"
                            checked={sendOnCtrlEnter === true}
                            onChange={onValueChange}
                        />
                        On
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Dark"
                            name="sendOnCtrlEnter"
                            checked={sendOnCtrlEnter === false}
                            onChange={onValueChange}
                        />
                        Off
                    </label>
                </div>
            </div>
        </div>
    );
};
