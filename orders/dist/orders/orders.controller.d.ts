import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './order.entity';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrder: CreateOrderDto): Promise<Orders>;
    findAll(): Promise<Orders[]>;
    findOne(orderID: string): Promise<Orders>;
    remove(orderID: string): Promise<void>;
}
