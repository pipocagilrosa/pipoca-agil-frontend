export class Register {
    name?: string
    email?: string
    birthDate?: string
    password?: string
    favoriteWordPhrase?: string
}

export class UpdatePassword {
    oldPassword?: string
    newPassword?: string
}

export class GenerateToken {
    email?: string
}

export class ValidateToken {
    token?: string
}