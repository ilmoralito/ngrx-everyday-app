import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], query: string): any[] {
    if (!products) return [];

    if (!query || query.length == 0) return products;

    return products.filter(
      (p) => p.toLowerCase().indexOf(query.toLowerCase()) != -1,
    );
  }
}
