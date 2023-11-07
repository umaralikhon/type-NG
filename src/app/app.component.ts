import {Component} from "@angular/core";

class Item {
    purchase: string;
    done: boolean;
    price: number;

    public constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'my-app',
    template: `
        <div class="page-header">
            <h1>Shopping list</h1>
        </div>
        <div class="panel">
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-8">
                        <input class="form-control" [(ngModel)]="text" placeholder="Name"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset-2 col-md-8">
                        <button class="btn btn-default" (click)="addItem(text, price)">Add</button>
                    </div>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Is bought</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done"></td>
                </tr>
                </tbody>
            </table>
        </div>`
})
export class AppComponent {

    text: string = "";
    price: number = 0;


    items: Item[] = [
        {purchase: "Bread", done: false, price: 10},
        {purchase: "Meal", done: false, price: 60},
        {purchase: "Potato", done: true, price: 15},
        {purchase: "Cheese", done: false, price: 80}
    ];

    addItem(text: string, price: number): void {
        if (text == null || text.trim() == "" || price == null) {
            return;
        }

        this.items.push(new Item(text, price));
    }


}