import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RocketsComponent } from './rockets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormatKey } from 'src/app/pipes/format-key';
import { SpaceXService } from 'src/app/services/space-x.service';
import { MockSpaceXService } from 'src/app/services/mocks/space-x.service.mock';


describe('RocketsComponent', () => {
    let component: RocketsComponent;
    let fixture: ComponentFixture<RocketsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RocketsComponent,
                FormatKey
            ],
            imports: [
                FontAwesomeModule,
                HttpClientTestingModule
            ],
            providers: [
                { provide: SpaceXService, useClass: MockSpaceXService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RocketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize currentProperty to rocket_name', () => {
        expect(component.currentProperty).toEqual('rocket_name');
    });

    it('should initialize reverse to false', () => {
        expect(component.reverse).toEqual(false);
    });

    it('should return the primitive keys of an object', () => {
        // Arrange
        let myObject = {a: 1, b: '2', c: true, d: {}, e: []};

        // Act
        var result = component.getKeys(myObject);

        // Assert
        expect(result.length).toEqual(3);
        expect(result).toContain('a');
        expect(result).toContain('b');
        expect(result).toContain('c');
    });

    it('should toggle the reverse property', () => {
        // Arrange
        component.reverse = false;
        component.currentProperty = 'id';

        // Act
        component.sort('id')

        // Assert
        expect(component.reverse).toEqual(true);
    });

    it('should set the reverse property to false when currentProperty is updated', () => {
        // Arrange
        component.reverse = true;
        component.currentProperty = 'id';

        // Act
        component.sort('rocket_name')

        // Assert
        expect(component.reverse).toEqual(false);
    });
});
