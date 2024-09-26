import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './order.entity';
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: Repository<Orders>);
    create(createOrderDto: CreateOrderDto): Promise<Orders>;
    findAll(): Promise<Orders[]>;
    findOne(orderID: string): Promise<Orders>;
    remove(orderID: string): Promise<void>;
}
