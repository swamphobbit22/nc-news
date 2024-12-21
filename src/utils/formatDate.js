
export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString(en-GB, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

