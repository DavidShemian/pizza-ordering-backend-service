import { Body, Controller, Post } from '@nestjs/common';
import { BaseController } from '../bases/controller.base';
import { ISuccessfulResponse } from '../interfaces/successful-response.interface';
import { AuthService } from './auth.service';
import { LoginDTO } from './DTO/login.dto';
import { RegisterDTO } from './DTO/register.dto';

@Controller('/auth')
export class AuthController extends BaseController {
    constructor(private readonly authService: AuthService) {
        super();
    }

    @Post('login')
    public async login(@Body() loginDTO: LoginDTO): Promise<ISuccessfulResponse<string>> {
        const token = await this.authService.login(loginDTO);

        return this.responseSuccess('Successfully login user', token);
    }

    @Post('register')
    public async register(@Body() registerDTO: RegisterDTO): Promise<ISuccessfulResponse<string>> {
        const token = await this.authService.register(registerDTO);

        return this.responseSuccess('Successfully registered user', token);
    }
}
