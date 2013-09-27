from django.contrib import admin
from .models import Event_Options,Event,ParentEvents

class ParentEventAdmin(admin.ModelAdmin):
    list_display=('name',)

class EventOptionsInline(admin.TabularInline):
    model = Event_Options

class EventAdmin(admin.ModelAdmin):
    inlines = [
        EventOptionsInline,
    ]
    list_display=('name',)
admin.site.register(ParentEvents,ParentEventAdmin)
admin.site.register(Event, EventAdmin)
