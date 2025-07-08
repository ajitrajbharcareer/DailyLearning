# HooksRxjsDI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## **0 `Contructure` - create instance of class/interfaces

## **1 `ngOninit` - When the app is initialize then it called/page loads

### **2/3 `ngOnChanges` vs. `ngDoCheck`**
| Feature                | `ngOnChanges`                          | `ngDoCheck`                          |
|------------------------|----------------------------------------|--------------------------------------|
| **Trigger**            | Only when `@Input()` properties change | **Every** change detection cycle     |
| **Purpose**            | React to input changes                 | Detect changes Angular misses        |
| **Performance**        | Efficient (runs only on input changes) | Potentially expensive (runs often)   |
| **Use Case**           | Simple input tracking                  | Deep/complex object change detection |
| **Data Provided**      | `SimpleChanges` object (previous/current values) | Manual comparison needed |


### **4/5. `ngAfterContentInit` vs. `ngAfterContentChecked`**
| Feature                | `ngAfterContentInit`                | `ngAfterContentChecked`              |
|------------------------|-------------------------------------|---------------------------------------|
| **When It Runs**       | Once after content projection (`<ng-content>`) is initialized | After every change detection cycle involving content projection |
| **Purpose**            | Initialize projected content        | React to changes in projected content |
| **Performance**        | Runs once (optimized)               | Runs frequently (use cautiously)      |
| **Typical Use Cases**  | Access projected DOM elements       | Validate/update projected content    |


### **6/7. `ngAfterViewInit` vs. `ngAfterViewChecked`**
| Feature                | `ngAfterViewInit`                   | `ngAfterViewChecked`                 |
|------------------------|-------------------------------------|---------------------------------------|
| **When It Runs**       | Once after component's view is fully initialized | After every change detection cycle involving the view |
| **Purpose**            | Access DOM elements after view renders | React to changes in the view         |
| **Performance**        | Runs once (safe for heavy logic)    | Runs frequently (avoid heavy logic)   |
| **Typical Use Cases**  | Initialize libraries (e.g., charts), focus elements | Validate DOM state, track dynamic changes |