export class Register {
    name?: string
    email?: string
    birthDate?: string
    password?: string
    favoriteWordPhrase?: string
}

export class Career {
    id?: string
    index?: number
    area?: string
    description?: string
    title?: string
    subTitle?: string
    content?: string
    image?: string
    contentTitle?: string
    contentSubtitle?: string
    courses?: Array<Course>
}

export class Course {
    id?: string
    title?: string
    description?: string
    topic?: string
    level?: string
    items?: any
}

export class UpdatePassword {
    email?: string
    oldPassword?: string
    newPassword?: string
}

export class ResetPassword {
    favoriteWordPhrase?: string
    token?: string
    newPassword?: string
}

export class GenerateToken {
    email?: string
}

export class ValidateToken {
    token?: string
}

export class ValidateKeyWord {
    favoriteWordPhrase?: string
}