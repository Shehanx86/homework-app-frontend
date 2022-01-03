export const homeworkPromiseToast = (message) => {
    return {
        pending: 'Homework is being ' + message,
        success: 'Homework ' + message + ' successfully 👌',
        error: 'Something went wrong 🤯'
    }
}