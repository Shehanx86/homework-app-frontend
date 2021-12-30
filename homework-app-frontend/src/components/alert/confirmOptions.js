export const OptionsTwoButtons = (title, msg, yesButtonLabel, yesButtonFunction, noButtonLabel, noButtonFunction) => {
    return {
        title: title,
        message: msg,
        buttons: [
            {
                label: yesButtonLabel,
                onClick: () => yesButtonFunction()
            },
            {
                label: noButtonLabel,
                onClick: () => noButtonFunction()
            },

        ]
    }
}

export const OptionsOneButton = (title, msg, yesButtonLabel, yesButtonFunction) => {
    return {
        title: title,
        message: msg,
        buttons: [
            {
                label: yesButtonLabel,
                onClick: () => yesButtonFunction()
            }
        ]
    }
}