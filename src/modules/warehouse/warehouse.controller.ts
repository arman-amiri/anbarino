import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { WarehouseService } from './providers/warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import {
  ApiTags,
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiOperation,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('warehouse')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new warehouse' })
  @ApiResponse({ status: 201, description: 'Warehouse successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateWarehouseDto })
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all warehouses' })
  @ApiResponse({ status: 200, description: 'List of all warehouses' })
  findAll() {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get warehouse by ID' })
  @ApiResponse({ status: 200, description: 'Warehouse details' })
  @ApiResponse({ status: 404, description: 'Warehouse not found' })
  @ApiParam({ name: 'id', type: 'number', description: 'Warehouse ID' })
  findOne(@Param('id') id: string) {
    return this.warehouseService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update warehouse information' })
  @ApiResponse({ status: 200, description: 'Warehouse updated successfully' })
  @ApiResponse({ status: 404, description: 'Warehouse not found' })
  @ApiParam({ name: 'id', type: 'number', description: 'Warehouse ID' })
  @ApiBody({ type: UpdateWarehouseDto })
  update(
    @Param('id') id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(+id, updateWarehouseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a warehouse' })
  @ApiResponse({ status: 200, description: 'Warehouse deleted successfully' })
  @ApiResponse({ status: 404, description: 'Warehouse not found' })
  @ApiParam({ name: 'id', type: 'number', description: 'Warehouse ID' })
  remove(@Param('id') id: string) {
    return this.warehouseService.remove(+id);
  }

  @Patch(':id/activate')
  @ApiOperation({ summary: 'Activate a warehouse' })
  @ApiResponse({ status: 200, description: 'Warehouse activated successfully' })
  @ApiResponse({ status: 404, description: 'Warehouse not found' })
  @ApiParam({ name: 'id', type: 'number', description: 'Warehouse ID' })
  activate(@Param('id') id: string) {
    return this.warehouseService.activate(+id);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ summary: 'Deactivate a warehouse' })
  @ApiResponse({
    status: 200,
    description: 'Warehouse deactivated successfully',
  })
  @ApiResponse({ status: 404, description: 'Warehouse not found' })
  @ApiParam({ name: 'id', type: 'number', description: 'Warehouse ID' })
  deactivate(@Param('id') id: string) {
    return this.warehouseService.deactivate(+id);
  }
}
