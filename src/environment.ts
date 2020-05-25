interface Environment {
    apollo: {
        url: string,
    }
}

export const environment: Environment = {
    apollo: {
        url: process.env.REACT_APP_APOLLO_URL || 'localhost',
    }
}