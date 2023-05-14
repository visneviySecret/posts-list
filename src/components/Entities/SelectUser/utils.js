export const getOptionsFromUserArray = (users) => {
    const result = []

    users.map((user) => {
        result.push({ value: user.id, label: user.name })
    })

    return result
}
